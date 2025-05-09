import { errorNotification, successNotification } from "../../utils/helpers";
import { useState } from "react";
import FormModalFileInputField from "./FormModalFileInputField";
import { updateProductCoverImg } from "../../api";

const ProductCoverIMGForm = ({ data, setOpen }) => {
  const [coverImg, setCoverImg] = useState();
  const [coverImgError, setCoverImgError] = useState("");
  const [coverImgText, setCoverImgText] = useState("");

  const handleCoverImgChange = (e) => {
    const file = e.target.files[0];
    setCoverImg(file);
    setCoverImgError("");
    setCoverImgText(file.name);
    console.log("coverImg", coverImg);
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    if (!coverImg) {
      errorNotification("Product cover image is missing!");
      setCoverImgError("");
    } else {
      console.log("coverImg", coverImg);
      setCoverImgError("");
      formData.append("img", coverImg);
      console.log("formData", ...formData);

      const response = await updateProductCoverImg(formData, data._id);
      console.log("response", response);
      if (response?.status === 200) {
        successNotification(response.data.message);
        setOpen(false);
      } else {
        errorNotification(response?.data?.error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-xl font-semibold">
        {`Update ${data?.item_name}'s cover image`}
      </h1>

      <div className="flex items-center justify-between">
        <div className="w-full">
          <FormModalFileInputField
            handleChange={handleCoverImgChange}
            label="Product Cover Image"
            name="img"
            nameText={coverImgText}
            error={coverImgError}
          />
        </div>
      </div>
      <button
        className="bg-blue-400 text-white p-2 rounded-md"
        onClick={handleSubmit}
      >
        Update
      </button>
    </div>
  );
};

export default ProductCoverIMGForm;
