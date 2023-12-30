import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { MenuItem, Select, TextField } from "@mui/material";
import { CategoriesList } from "../../constants/CategoriesList";
import { SelectChangeEvent } from "@mui/material";
import { updateProduct } from "../../services/api/fetchProduct";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

interface ProductData {
  id: number; // Change the type of 'id' to number
  productName: string;
  mainImage: string;
  otherImages: string;
  description: string;
  tags: string;
  brand: string;
  type: string;
  price: number;
  discountPrice: number;
  stock: number;
  status: string;
  category: string;
  [key: string]: string | number;
}

interface UpdateProductModalProps {
  open: boolean;
  onClose: () => void;
  product: ProductData | null;
}

const UpdateProductModal: React.FC<UpdateProductModalProps> = ({
  open,
  onClose,
  product,
}) => {
  const [formData, setFormData] = useState<ProductData | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [productId, setProductId] = useState<string>();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData(product);
      setProductId(product.id.toString());
    }
  }, [product]);

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (formData) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData) {
      try {
        const formDataToSend = new FormData();
        for (const key in formData) {
          if (Object.prototype.hasOwnProperty.call(formData, key)) {
            formDataToSend.append(key, formData[key] as string); // Assuming all values are strings, adjust types accordingly
          }
        }

        const updatedProductData: ProductData = {
          id: formData.id,
          productName: formDataToSend.get("productName") as string,
          mainImage: formDataToSend.get("mainImage") as string,
          otherImages: formDataToSend.get("otherImages") as string,
          description: formDataToSend.get("description") as string,
          tags: formDataToSend.get("tags") as string,
          brand: formDataToSend.get("brand") as string,
          type: formDataToSend.get("type") as string,
          price: Number(formDataToSend.get("price")),
          discountPrice: Number(formDataToSend.get("discountPrice")),
          stock: Number(formDataToSend.get("stock")),
          status: formDataToSend.get("status") as string,
          category: formDataToSend.get("category") as string,
        };

        const updatedProduct = await updateProduct(
          Number(productId),
          updatedProductData as import("d:/Projects/Green_Supermarket/frontend/src/types/topsales").ProductData
        );

        console.log("Product Updated:", updatedProduct);
        setSnackbarOpen(true);
      } catch (error) {
        console.error("Error updating product:", error);
      }
    }
    onClose(); // Close the modal after updating or on error
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent>
          <form
            className="flex flex-col gap-2 mt-3"
            onSubmit={handleFormSubmit}
          >
            <TextField
              name="id"
              disabled
              value={productId || ""}
              label="Product ID"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <TextField
              name="productName"
              type="text"
              value={formData?.productName || ""}
              onChange={handleInputChange}
              label="Product Name"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <TextField
              name="stock"
              type="text"
              value={formData?.stock || ""}
              onChange={handleInputChange}
              label="Stock"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <TextField
              name="tags"
              type="text"
              value={formData?.tags || ""}
              onChange={handleInputChange}
              label="Tags"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <TextField
              name="brand"
              type="text"
              value={formData?.brand || ""}
              onChange={handleInputChange}
              label="brand"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <TextField
              name="description"
              type="text"
              value={formData?.description || ""}
              onChange={handleInputChange}
              label="Description"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <TextField
              name="mainImage"
              type="text"
              value={formData?.mainImage || ""}
              onChange={handleInputChange}
              label="Main Image"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <TextField
              name="otherImages"
              type="text"
              value={formData?.otherImages || ""}
              onChange={handleInputChange}
              label="Other Images"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <TextField
              name="price"
              type="text"
              value={formData?.price || ""}
              onChange={handleInputChange}
              label="Price"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <TextField
              name="type"
              type="text"
              value={formData?.type || ""}
              onChange={handleInputChange}
              label="Type"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <TextField
              name="discountPrice"
              type="text"
              value={formData?.discountPrice || ""}
              onChange={handleInputChange}
              label="DiscountPrice"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <Select
              name="category"
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
            <DialogActions>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
              <button type="submit">Update</button>
            </DialogActions>
          </form>
        </DialogContent>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={5000} // Show Snackbar for 5 seconds (adjust as needed)
          onClose={handleCloseSnackbar}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleCloseSnackbar}
            severity="success"
          >
            Product updated successfully!
          </MuiAlert>
        </Snackbar>
      </Dialog>
    </>
  );
};

export default UpdateProductModal;
