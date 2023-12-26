import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CategoriesList } from "../../constants/CategoriesList";
import ColumnGroupingTable from "../../components/admin/Table";

interface ManageProductsProps {
  openAddProductModal: () => void;
}

const ManageProducts: React.FC<ManageProductsProps> = ({
  openAddProductModal,
}) => {
  const [category, setCategory] = useState("");

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const [status, setStatus] = useState("");

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <div className="w-[1029px] h-[814px] bg-lightGray rounded-md p-8">
      <div className="flexBetween">
        <h1 className="text-4xl font-semibold">Products</h1>
        <button
          className="px-4 py-2 text-white rounded-md bg-customGreen"
          onClick={openAddProductModal}
        >
          Add Product
        </button>
      </div>
      <div className="gap-5 my-8 flexBetween">
        <Box sx={{ width: "50%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChangeCategory}
            >
              <MenuItem value="none">None</MenuItem>
              {CategoriesList.map((category) => (
                <MenuItem
                  key={category.id}
                  value="name"
                  onClick={() => setCategory(category.id)}
                >
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "50%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Status"
              onChange={handleChangeStatus}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="In-Stock">In Stock</MenuItem>
              <MenuItem value="out-of-stock">Out of Stock</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={CategoriesList.map((option) => option.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Product Name"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Box>
      </div>
      <div>
        <ColumnGroupingTable categoryFilter={category} />
      </div>
    </div>
  );
};

export default ManageProducts;
