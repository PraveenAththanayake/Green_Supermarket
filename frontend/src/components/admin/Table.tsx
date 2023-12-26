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

// Define the product list titles
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

// Create columns based on product list titles
const columns: Column[] = productsListTitle.map((product) => ({
  id: product,
  label: product,
  minWidth: 170,
  align: "right",
  format: (value: number) => value.toLocaleString("en-US"),
}));

// Define the data interface
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

// Create rows based on the provided data
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
  status: product.stock > 0 ? "In-Stock" : "Out of Stock",
}));

export default function ColumnGroupingTable() {
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
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
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
