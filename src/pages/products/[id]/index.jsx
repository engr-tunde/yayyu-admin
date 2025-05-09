import { useParams } from "react-router-dom";
import FormModal from "../../../components/globals/FormModal";
import { fetchCategories, fetchSingleProduct } from "../../../api";
import Loader from "../../../components/globals/Loader";
import ErrorWidget from "../../../components/globals/ErrorWidget";
import { formatter } from "../../../utils/helpers";

const SingleProductPage = () => {
  let { id } = useParams();
  console.log("id", id);

  const { product, productLoading, productError, mutate } =
    fetchSingleProduct(id);
  const { categories, categoriesLoading, categoriesError } = fetchCategories();
  console.log("product", product);

  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {product ? (
        <>
          {/* LEFT */}
          <div className="w-full xl:w-2/3">
            {/* TOP */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* USER INFO CARD */}
              <div className="bg-titusDarkGray py-6 rounded-md flex-1 flex gap-4 px-2">
                <div className="w-1/3">
                  <div className="">
                    <img
                      src={`${import.meta.env.VITE_API_PUBLIC}/products/${
                        product?.data?.img
                      }`}
                      alt=""
                      width={144}
                      height={144}
                      className="w-36 h-36 rounded-full object-cover"
                    />
                    <div className="group flex items-center gap-2">
                      <FormModal
                        table="productCoverIMG"
                        type="update"
                        data={product?.data}
                      />
                      <div className="hidden group-hover:block text-sm text-white">
                        Update image
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/3 flex flex-col justify-center gap-3">
                  <h1 className="text-xl font-semibold text-gray-300">
                    {product?.data.item_name}
                  </h1>
                  <p className="text-sm text-gray-500">
                    Category:{" "}
                    <span className="font-medium">
                      {product?.data?.category}
                    </span>
                  </p>
                </div>
              </div>
              {/* SMALL CARDS */}
              <div className="flex-1 flex gap-4 justify-between flex-wrap">
                <div className="w-full bg-titusDarkGray p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[47%] 2xl:w-[48%]">
                  <img
                    src="/assets/images/singleAttendance.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <div className="">
                    <h1 className="text-lg font-semibold">
                      {formatter(product?.data?.original_price)
                        .toString()
                        .split("NGN")[1]
                        .substr(1)}
                    </h1>
                    <span className="text-sm text-gray-400">
                      Original Price (NGN)
                    </span>
                  </div>
                </div>
                <div className="w-full bg-titusDarkGray p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[47%] 2xl:w-[48%]">
                  <img
                    src="/assets/images/singleBranch.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <div className="">
                    <h1 className="text-lg font-semibold">
                      {formatter(product?.data?.new_price)
                        .toString()
                        .split("NGN")[1]
                        .substr(1)}
                    </h1>
                    <span className="text-sm text-gray-400">
                      New Price (NGN)
                    </span>
                  </div>
                </div>
                <div className="w-full bg-titusDarkGray p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[47%] 2xl:w-[48%]">
                  <img
                    src="/assets/images/singleLesson.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <div className="">
                    <div className="text-lg font-semibold">
                      {product?.data?.sizes?.map((item, i) => (
                        <div className="" key={i}>
                          {item}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">Sizes</span>
                  </div>
                </div>
                <div className="w-full bg-titusDarkGray p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[47%] 2xl:w-[48%]">
                  <img
                    src="/assets/images/singleClass.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <div className="">
                    <div className="text-lg font-semibold">
                      {product?.data?.colors?.map((item, i) => (
                        <div className="" key={i}>
                          {item}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">Colors</span>
                  </div>
                </div>
              </div>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col gap-0 mt-7 bg-titusDarkLight rounded-md max-h-[50vh] overflow-y-scroll">
              <h3 className="p-5 uppercase">Product Images</h3>
              <div className="flex-1 flex gap-4 justify-between flex-wrap px-5 pb-5 h-[40vh] overflow-y-scroll">
                {product?.data.images.split(", ").map((item, i) => (
                  <div
                    key={i}
                    className="w-[48%] bg-titusDarkGray p-4 rounded-md flex gap-4 md:w-[32%] lg:w-[24%]"
                  >
                    <img
                      src={`${
                        import.meta.env.VITE_API_PUBLIC
                      }/products/${item}`}
                      alt=""
                      width={24}
                      height={24}
                      className="w-10 h-10"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full xl:w-1/3 flex flex-col gap-4">
            <div className="bg-titusDarkGray p-4 rounded-md">
              <h1 className="uppercase"> Actions</h1>
              <div className="mt-4 flex gap-4 flex-wrap text-sm text-gray-900">
                <FormModal
                  table="product"
                  type="update"
                  data={product?.data}
                  id={product?.data._id}
                  categories={categories?.data}
                  mutate={mutate}
                />
                <FormModal
                  table="product"
                  type="delete"
                  id={product?.data._id}
                  mutate={mutate}
                />
              </div>
            </div>
            <div className="bg-titusDarkGray p-4 rounded-md lg:mb-10">
              <h1 className="uppercase"> Product Description</h1>
              <div className="mt-4 flex flex-col gap-4 flex-wrap text-sm">
                <span className="font-semibold">
                  {product?.data?.description}
                </span>
              </div>
            </div>
            <div className="bg-titusDarkGray p-4 rounded-md">
              <h1 className="uppercase"> Product Specification</h1>
              <div className="mt-4 flex flex-col gap-2 flex-wrap text-sm">
                {product?.data?.specification?.map((item, i) => (
                  <li className="" key={i}>
                    {item}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : null}
      {productLoading ? <Loader /> : null}
      {productError ? <ErrorWidget error={productError} /> : null}
    </div>
  );
};

export default SingleProductPage;
