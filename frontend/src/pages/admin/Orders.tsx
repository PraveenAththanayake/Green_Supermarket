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
import {
  deleteCheckout,
  getCheckouts,
} from "../../services/api/checkoutService";
import { CheckoutData } from "../../types/orders";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: React.ReactNode) => React.ReactNode;
}

const checkoutColumns: Column[] = [
  { id: "id", label: "ID", minWidth: 170, align: "right" },
  { id: "firstName", label: "First Name", minWidth: 170, align: "right" },
  { id: "lastName", label: "Last Name", minWidth: 170, align: "right" },
  { id: "email", label: "Email", minWidth: 170, align: "right" },
  { id: "phone", label: "Phone", minWidth: 170, align: "right" },
  { id: "address", label: "Address", minWidth: 170, align: "right" },
  { id: "town", label: "Town", minWidth: 170, align: "right" },
  { id: "country", label: "Country", minWidth: 170, align: "right" },
  { id: "zipcode", label: "Zipcode", minWidth: 170, align: "right" },
  { id: "compantName", label: "Company Name", minWidth: 170, align: "right" },
];

export default function ColumnGroupingTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [checkouts, setCheckouts] = useState<CheckoutData[]>([]);

  const handleDelete = async (id: string) => {
    try {
      await deleteCheckout(Number(id));
      // Remove the deleted product from the state
      setCheckouts((prevCheckouts) =>
        prevCheckouts.filter((checkout) => checkout.id !== Number(id))
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  async function getOrders() {
    try {
      const response = await getCheckouts();
      setCheckouts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const rows: CheckoutData[] = checkouts.map((checkout) => ({
    id: checkout.id,
    firstName: checkout.firstName,
    lastName: checkout.lastName,
    email: checkout.email,
    phone: checkout.phone,
    address: checkout.address,
    town: checkout.town,
    country: checkout.country,
    zipcode: checkout.zipcode,
    compantName: checkout.compantName,
  }));

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="w-[70vw]">
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Actions</TableCell>
                {checkoutColumns.map((column) => (
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell align="center">
                      <IconButton
                        onClick={() => handleDelete(String(row.id))}
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    {checkoutColumns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ textAlign: "center" }}
                        className="truncate flexCenter"
                      >
                        {column.format
                          ? column.format(row[column.id as keyof CheckoutData])
                          : row[column.id as keyof CheckoutData]}
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
