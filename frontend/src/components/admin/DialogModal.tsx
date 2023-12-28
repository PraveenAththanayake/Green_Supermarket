// UpdateProductModal.tsx
import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { ProductData } from "../../types"; // Import the ProductData type if not already imported
import { useForm } from "react-hook-form"; // Import useForm for form handling
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MenuItem, Select, TextField } from "@mui/material";
import { CategoriesList } from "../../constants/CategoriesList";
import { updateProduct } from "../../services/api/fetchProduct";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material";
import Dropzone from "react-dropzone";
// import { format, parseISO } from "date-fns";

// Assuming ProductData is defined in types.ts or a similar file
interface FormData {
  id: number;
  productName: string;
  tags: string;
  brand: string;
  description: string;
  mainImage: string;
  otherImages: string;
  type: string;
  stock: string;
  price: string;
  discountPrice: string;
  category: string;
  productId: number;
  // mfg: Date;
}

interface UpdateProductModalProps {
  open: boolean;
  onClose: () => void;
  product: ProductData | null;
  productId: number | null;
}

const schema = yup.object().shape({
  id: yup.number(),
  productName: yup.string().required("Product Name is required!"),
  stock: yup.number().required("Stock Limit is required!"),
  tags: yup.string().required("Tags is required!"),
  brand: yup.string().required("Brand is required!"),
  description: yup.string().required("Description is required!"),
  mainImage: yup.string().required("MainImage is required"),
  otherImages: yup.string(),
  price: yup.number().required("Price (LKR) is required!"),
  // mfg: yup.date(),
  type: yup.string().required("Type is required!"),
  discountPrice: yup.number(),
  category: yup.string().required("Category is required!"),
});

const UpdateProductModal: React.FC<UpdateProductModalProps> = ({
  open,
  onClose,
  product,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigator = useNavigate();

  const [category, setCategory] = useState<string | null>(null);
  const [productId, setProductId] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    console.log("Form Submitted:", data);

    if (product) {
      try {
        const formData = new FormData();
        formData.append("productId", String(productId));
        formData.append("productName", data.productName);
        formData.append("stock", data.stock);
        formData.append("tags", data.tags);
        formData.append("brand", data.brand);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("type", data.type);
        formData.append("discountPrice", data.discountPrice);
        formData.append("category", data.category);
        formData.append("mainImage", data.mainImage[0]);
        formData.append("otherImages", data.otherImages[0]);

        const response = await updateProduct(product.id, formData);

        console.log(response.data);
        // navigator("/admin");
      } catch (err) {
        console.error(err.response?.data); // Log the error response
      }
    }
    onClose();
  };

  useEffect(() => {
    // Set initial form values when the component mounts
    if (product) {
      setProductId(String(product.id)); // Convert productId to string
      setValue("id", product.id);
      setValue("productName", product.productName);
      setValue("stock", product.stock);
      setValue("tags", product.tags);
      setValue("brand", product.brand);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("type", product.type);
      setValue("discountPrice", product.discountPrice);
      setValue("category", product.category);
      // Set file values using setValue
      setValue("mainImage", product.mainImage);
      setValue("otherImages", product.otherImages[0]);
    }
  }, [product, setValue]);

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent>
          <form
            className="flex flex-col gap-2 mt-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              {...register("id")}
              disabled
              value={productId || ""}
              label="Product ID"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <TextField
              {...register("productName")}
              type="text"
              label="Product Name"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <p className="text-xs italic text-red">
              {errors.productName?.message}
            </p>
            <TextField
              {...register("stock")}
              type="text"
              label="Stock"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <p className="text-xs italic text-red">{errors.stock?.message}</p>
            <TextField
              {...register("tags")}
              type="text"
              label="tags"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <p className="text-xs italic text-red">{errors.tags?.message}</p>
            <TextField
              {...register("brand")}
              type="text"
              label="brand"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <p className="text-xs italic text-red">{errors.brand?.message}</p>
            <TextField
              {...register("description")}
              type="text"
              label="description"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <p className="text-xs italic text-red">
              {errors.description?.message}
            </p>
            {/* <TextField
              {...register("mfg")}
              type="date"
              label="mfg"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            /> */}
            {/* <p className="text-xs italic text-red">{errors.mfg?.message}</p> */}
            <TextField
              {...register("type")}
              type="text"
              label="type"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <p className="text-xs italic text-red">{errors.type?.message}</p>
            <TextField
              {...register("price")}
              type="text"
              label="price"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <p className="text-xs italic text-red">{errors.price?.message}</p>
            <TextField
              {...register("discountPrice")}
              type="text"
              label="discountPrice"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <p className="text-xs italic text-red">
              {errors.discountPrice?.message}
            </p>
            <TextField
              {...register("mainImage")}
              type="text"
              label="Main Image"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <p className="text-xs italic text-red">
              {errors.mainImage?.message}
            </p>
            <TextField
              {...register("otherImages")}
              type="text"
              label="Other Image"
              variant="outlined"
              className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
            />
            <p className="text-xs italic text-red">
              {errors.otherImages?.message}
            </p>
            <Select
              {...register("category")}
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
      </Dialog>
    </>
  );
};

export default UpdateProductModal;
