import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CategoriesList } from "../../constants/CategoriesList";
import ColumnGroupingTable from "../../components/admin/Table";
import { fetchProduct } from "../../services/api/fetchProduct";
import { ProductData } from "../../types";

interface ManageProductsProps {
  AddProductDialogModal: () => void;
}

const ManageProducts: React.FC<ManageProductsProps> = ({
  AddProductDialogModal,
}) => {
  const [category, setCategory] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<ProductData[]>([]);

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

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="w-[1029px] h-[814px] bg-lightGray rounded-md p-8">
      <div className="flexBetween">
        <h1 className="text-4xl font-semibold">Products</h1>
        <button
          className="px-4 py-2 text-white rounded-md bg-customGreen"
          onClick={AddProductDialogModal}
        >
          Add Product
        </button>
      </div>
      <div className="gap-5 my-8 flexBetween">
        <Box sx={{ width: "50%" }}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={category || "none"}
              label="Category"
              onChange={handleChangeCategory}
            >
              <MenuItem value="none">None</MenuItem>
              {CategoriesList.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "50%" }}>
          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status-select"
              value={status}
              label="Status"
              onChange={handleChangeStatus}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="in-stock">In Stock</MenuItem>
              <MenuItem value="out-of-stock">Out of Stock</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={[
              ...CategoriesList.map((option) => option.name),
              ...products.map((option) => option.productName),
            ]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Product Name"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                onChange={handleChangeSearch}
              />
            )}
          />
        </Box>
      </div>
      <div>
        <ColumnGroupingTable
          categoryFilter={category}
          statusFilter={status}
          searchFilter={search}
        />
      </div>
    </div>
  );
};

export default ManageProducts;
