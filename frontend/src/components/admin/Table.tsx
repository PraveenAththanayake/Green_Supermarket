// ColumnGroupingTable.tsx
import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { products } from "../../constants/ProductList";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const productsListTitle = [
  "name",
  "imageUrl",
  "price",
  "discountPrice",
  "stock",
  "status",
  "type",
  "date",
  "brand",
  "category",
];

const columns: Column[] = productsListTitle.map((product) => ({
  id: product,
  label: product,
  minWidth: 170,
  align: "right",
  format: (value: number) => value.toLocaleString("en-US"),
}));

interface Data {
  name: string;
  imageUrl: string;
  price: number;
  discountPrice: number;
  stock: number;
  status: string;
  type: string;
  date: string;
  brand: string;
  category: string;
}

const rows: Data[] = products.map((product) => ({
  name: product.name,
  imageUrl: product.imageUrl,
  price: product.price,
  discountPrice: product.discountPrice,
  stock: product.stock,
  type: product.type,
  date: product.date,
  brand: product.brand,
  category: product.category,
  status: product.stock > 0 ? "in-stock" : "out-of-stock",
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        row.name
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchFilterNormalized)
    );
  }

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
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
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
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
  );
}
