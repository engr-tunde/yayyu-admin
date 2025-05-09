import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormModalInputField from "./FormModalInputField";
import { validateAddProduct } from "../../utils/validate";
import FormModalSelectField from "./FormModalSelectField";
import { errorNotification, successNotification } from "../../utils/helpers";
import { useEffect, useState } from "react";
import FormModalFileInputField from "./FormModalFileInputField";
import { addProduct, updateProduct } from "../../api";

const ProductForm = ({ type, data, setOpen, categories }) => {
  const [coverImg, setCoverImg] = useState();
  const [coverImgError, setCoverImgError] = useState("");
  const [coverImgText, setCoverImgText] = useState("");

  const [images, setimages] = useState();
  const [imagesError, setimagesError] = useState("");
  const [imagesText, setimagesText] = useState("");
  const handleCoverImgChange = (e) => {
    const file = e.target.files[0];
    setCoverImg(file);
    setCoverImgError("");
    setCoverImgText(file.name);
    console.log("coverImg", coverImg);
  };
  const handleImagesChange = (e) => {
    let flName = [];
    let files = e.target.files;
    setimages(files);
    setimagesError("");

    for (let i in files) {
      flName.push(files[i].name);
    }
    setimagesText(flName.join(", "));
  };
  let [catOptions, setcatOptions] = useState([]);
  const validate = validateAddProduct(catOptions);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validate),
  });

  const onSubmit = handleSubmit(async (fdata) => {
    console.log("data", fdata);
    const formData = new FormData();
    if (type === "create" && !coverImg) {
      errorNotification("Product cover image is missing!");
      setCoverImgError("");
    } else {
      console.log("coverImg", coverImg);
      setCoverImgError("");
      if (!images) {
        formData.append(`images`, coverImg);
      } else {
        for (let i = 0; i < images.length; i++) {
          formData.append(`images`, images[i]);
        }
      }
      // if (coverImg) {
      formData.append("img", coverImg);
      // }
      if (fdata.colors) {
        formData.append("colors", fdata.colors);
      }
      if (fdata.sizes) {
        formData.append("sizes", fdata.sizes);
      }
      formData.append("item_name", fdata.item_name);
      formData.append("category", fdata.category);
      formData.append("description", fdata.description);
      formData.append("specification", fdata.specification);
      formData.append("original_price", fdata.original_price);
      formData.append("new_price", fdata.new_price);
      console.log("formData", ...formData);

      const response =
        type === "create"
          ? await addProduct(formData)
          : await updateProduct(fdata, data._id);
      console.log("response", response);
      setTimeout(() => {
        setOpen(false);
      }, 1000);
      if (response?.status === 200) {
        successNotification(response.data.message);
      } else {
        errorNotification(response?.data?.error);
      }
    }
  });

  useEffect(() => {
    let catOpt = [];
    categories.forEach((element) => {
      catOpt.push(element.category);
    });
    setcatOptions(catOpt);
    // catOpt =
  }, [categories]);

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create"
          ? "List token for Trading"
          : `Update ${data?.item_name}'s data`}
      </h1>

      <div className="flex justify-between flex-wrap gap-4">
        <div className="w-[45%]">
          <FormModalInputField
            label="Product Name"
            name="item_name"
            defaultValue={data?.item_name}
            register={register}
            error={errors?.item_name}
          />
        </div>

        <div className="w-[45%]">
          <FormModalSelectField
            label="Product Categories"
            name="category"
            defaultValue={data?.category}
            register={register}
            error={errors?.category}
            options={catOptions}
            selected={data?.category}
          />
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-4">
        <div className="w-full">
          <FormModalInputField
            label="Product Description"
            name="description"
            defaultValue={data?.description}
            register={register}
            error={errors?.description}
          />
        </div>
      </div>

      <div className="w-full">
        <FormModalInputField
          label="Product Specification (separate with '; ')"
          name="specification"
          defaultValue={data?.specification.join(". ")}
          register={register}
          error={errors?.specification}
        />
      </div>

      <div className="w-full flex justify-between flex-wrap gap-4">
        <div className="w-[45%]">
          <FormModalInputField
            label="Original Price"
            name="original_price"
            defaultValue={data?.original_price}
            register={register}
            error={errors?.original_price}
          />
        </div>
        <div className="w-[45%]">
          <FormModalInputField
            label="New Price"
            name="new_price"
            defaultValue={data?.new_price}
            register={register}
            error={errors?.new_price}
          />
        </div>
      </div>

      <div className="w-full flex justify-between flex-wrap gap-4">
        <div className="w-[45%]">
          <FormModalInputField
            label="Available sizes"
            name="sizes"
            defaultValue={data?.sizes}
            register={register}
            error={errors?.sizes}
          />
        </div>
        <div className="w-[45%]">
          <FormModalInputField
            label="Availables colors (separate with '; ')"
            name="colors"
            defaultValue={data?.colors}
            register={register}
            error={errors?.colors}
          />
        </div>
      </div>

      {type === "create" ? (
        <div className="flex items-center justify-between">
          <div className="w-[45%]">
            <FormModalFileInputField
              handleChange={handleCoverImgChange}
              label="Product Cover Image"
              name="img"
              nameText={coverImgText}
              error={coverImgError}
            />
          </div>
          <div className="w-[45%]">
            <FormModalFileInputField
              handleChange={handleImagesChange}
              label="Product Images"
              name="images"
              nameText={imagesText}
              error={imagesError}
              multiple={true}
            />
          </div>
        </div>
      ) : null}

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ProductForm;
