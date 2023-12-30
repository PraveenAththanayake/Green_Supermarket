// ColumnGroupingTable.tsx
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { fetchProduct, deleteProduct } from "../../services/api/fetchProduct";
import { ProductData } from "../../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import IconButton from "@mui/material/IconButton";
import UpdateProductModal from "./DialogModal";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: string) => React.ReactNode;
}

const productsListTitle = [
  "id",
  "productName",
  "mainImage",
  "otherImages",
  "tags",
  "brand",
  "description",
  "type",
  "price",
  "discountPrice",
  "stock",
  "status",
  "category",
];

const columns: Column[] = productsListTitle.map((product) => ({
  id: product,
  label: product,
  minWidth: 170,
  align: "right",
  format: (value: string) => {
    if (product === "mainImage" || product === "otherImages") {
      const images = Array.isArray(value) ? value : [value];
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${product} ${index}`}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          ))}
        </div>
      );
    } else {
      return value ? value.toLocaleString() : "";
    }
  },
}));

interface ColumnGroupingTableProps {
  categoryFilter: string | null;
  statusFilter: string | null;
  searchFilter: string | null;
}

export default function ColumnGroupingTable({
  categoryFilter,
  statusFilter,
  searchFilter,
}: ColumnGroupingTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(
    null
  );

  const handleUpdate = (row: ProductData) => {
    setSelectedProduct(row);
    setOpenModal(true);
  };

  const handleView = (row: ProductData) => {
    console.log("Viewing product:", row);
  };

  const handleDelete = async (productId: number) => {
    try {
      await deleteProduct(productId);
      // Remove the deleted product from the state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await fetchProduct();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const rows: ProductData[] = products.map((product) => ({
    id: String(product.id),
    productName: product.productName,
    mainImage: product.mainImage,
    otherImages: product.otherImages,
    tags: product.tags,
    brand: product.brand,
    description: product.description,
    type: product.type,
    price: product.price,
    discountPrice: product.discountPrice,
    stock: product.stock,
    category: product.category,
    status: product.stock > 0 ? "in-stock" : "out-of-stock",
  }));

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let filteredRows = rows;

  if (categoryFilter && categoryFilter !== "none") {
    filteredRows = filteredRows.filter(
      (row) => row.category === categoryFilter
    );
  }

  if (statusFilter && statusFilter !== "none") {
    filteredRows = filteredRows.filter((row) => row.status === statusFilter);
  }

  if (searchFilter && searchFilter !== "none") {
    const searchFilterNormalized = searchFilter
      .toLowerCase()
      .replace(/\s/g, "");
    filteredRows = filteredRows.filter(
      (row) =>
        row.category
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchFilterNormalized) ||
        row.productName
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchFilterNormalized)
    );
  }

  return (
    <>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  style={{
                    minWidth: 170,
                    textAlign: "center",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Actions
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      textAlign: "center",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell align="center">
                      <IconButton
                        onClick={() => handleView(row)}
                        aria-label="view"
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleUpdate(row)}
                        aria-label="update"
                      >
                        <UpdateIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDelete(row.id)}
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ textAlign: "center" }}
                        className="truncate flexCenter"
                      >
                        {column.format
                          ? column.format(row[column.id])
                          : row[column.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <UpdateProductModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct ?? null} // Replace the productId prop with the product prop
      />
    </>
  );
}
