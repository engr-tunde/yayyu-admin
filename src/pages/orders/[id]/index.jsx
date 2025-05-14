import React from "react";
import { useParams } from "react-router-dom";
import FormModal from "../../../components/globals/FormModal";
import { fetchSingleOrder } from "../../../api";
import Loader from "../../../components/globals/Loader";
import ErrorWidget from "../../../components/globals/ErrorWidget";
import { dateFormatter, formatter } from "../../../utils/helpers";

const SingleOrderPage = () => {
  let { id } = useParams();
  console.log("id", id);

  const { order, orderLoading, orderError, mutate } = fetchSingleOrder(id);
  console.log("order", order);

  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {order ? (
        <>
          {/* LEFT */}
          <div className="w-full xl:w-2/3">
            {/* TOP */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* USER INFO CARD */}
              <div className="bg-titusDarkGray py-6 rounded-md flex-1 flex gap-4 px-2">
                <div className="w-1/3">
                  <img
                    src={`${import.meta.env.VITE_API_PUBLIC}/products/${
                      order?.data?.img
                    }`}
                    alt=""
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-full object-cover"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-between gap-4">
                  <h1 className="text-xl font-semibold text-gray-300">
                    {order?.data.order_title}
                  </h1>
                  <p className="text-sm text-gray-500">
                    Ordered by:{" "}
                    <span className="font-medium">
                      {order?.data?.first_name} {order?.data?.last_name}
                    </span>
                  </p>
                  <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                      <img
                        src="/assets/images/blood.png"
                        height={14}
                        width={14}
                        alt=""
                      />
                      <span className="">
                        {" "}
                        {order?.data?.city}, {order?.data?.state}
                      </span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                      <img
                        src="/assets/images/date.png"
                        height={14}
                        width={14}
                        alt=""
                      />
                      <span className="">
                        {dateFormatter(order?.data?.created_at)}
                      </span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                      <img
                        src="/assets/images/mail.png"
                        height={14}
                        width={14}
                        alt=""
                      />
                      <span className=""> {order?.data?.email}</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                      <img
                        src="/assets/images/phone.png"
                        height={14}
                        width={14}
                        alt=""
                      />
                      <span className=""> {order?.data?.phone}</span>
                    </div>
                  </div>
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
                      {formatter(order?.data?.original_total)
                        .toString()
                        .split("NGN")[1]
                        .substr(1)}
                    </h1>
                    <span className="text-sm text-gray-400">
                      Original Total (NGN)
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
                      {formatter(order?.data?.subtotal)
                        .toString()
                        .split("NGN")[1]
                        .substr(1)}
                    </h1>
                    <span className="text-sm text-gray-400">
                      Subtotal (NGN)
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
                    <h1 className="text-lg font-semibold">
                      {formatter(order?.data?.shipping_fee)
                        .toString()
                        .split("NGN")[1]
                        .substr(1)}
                    </h1>
                    <span className="text-sm text-gray-400">
                      Shipping Fee (NGN)
                    </span>
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
                    <h1 className="text-lg font-semibold">
                      {formatter(order?.data?.total_paid)
                        .toString()
                        .split("NGN")[1]
                        .substr(1)}
                    </h1>
                    <span className="text-sm text-gray-400">
                      Total Paid (NGN)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col gap-0 mt-7 bg-titusDarkLight rounded-md max-h-[50vh] overflow-y-scroll">
              <h3 className="p-5 uppercase">
                Items ordered ({order?.data.items.length} pcs)
              </h3>
              <div className="flex-1 flex gap-4 justify-between flex-wrap px-5 pb-5 h-[40vh] overflow-y-scroll">
                {order?.data.items.map((item, i) => (
                  <div
                    key={i}
                    className="w-full bg-titusDarkGray p-4 rounded-md flex gap-4 md:w-[48%] lg:w-[30%]"
                  >
                    <img
                      src={`${import.meta.env.VITE_API_PUBLIC}/products/${
                        item.img
                      }`}
                      alt=""
                      width={24}
                      height={24}
                      className="w-10 h-10"
                    />
                    <div className="">
                      <h1 className="text-[14px] font-semibold">
                        {item.item_name}{" "}
                        {item.color.length ? `- Color: ${item.color} ` : null}
                        {item.size.length ? `- Size: ${item.size}` : null}
                      </h1>
                      <span className="text-sm text-gray-500">
                        {formatter(item.new_price)
                          .toString()
                          .split("NGN")[1]
                          .substr(1)}
                      </span>
                    </div>
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
                {order?.data?.delivery_status !== "Completed" && (
                  <FormModal
                    table="order"
                    type="complete"
                    data={order?.data}
                    id={order?.data?._id}
                    mutate={mutate}
                  />
                )}
                {order?.data?.delivery_status !== "Canceled" && (
                  <FormModal
                    table="order"
                    type="cancel"
                    data={order?.data}
                    id={order?.data?._id}
                    mutate={mutate}
                  />
                )}
                {order?.data?.delivery_status !== "Pending" && (
                  <FormModal
                    table="order"
                    type="pend"
                    data={order?.data}
                    id={order?.data?._id}
                    mutate={mutate}
                  />
                )}
                <FormModal
                  table="order"
                  type="delete"
                  id={order?.data._id}
                  mutate={mutate}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 lg:mb-10">
              <div className="col-span-1 bg-titusDarkGray p-4 rounded-md">
                <h1 className="uppercase"> Delivery</h1>
                <div className="mt-4 flex flex-col gap-4 flex-wrap text-sm">
                  <span className="font-semibold">
                    {order?.data?.delivery_status}
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-titusDarkGray p-4 rounded-md">
                <h1 className="uppercase"> Payment</h1>
                <div className="mt-4 flex flex-col gap-4 flex-wrap text-sm">
                  <span className="font-semibold">
                    {order?.data?.payment_status}
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-titusDarkGray p-4 rounded-md">
                <h1 className="uppercase"> Reference</h1>
                <div className="mt-4 flex flex-col gap-4 flex-wrap text-sm">
                  <span className="font-semibold">
                    {order?.data?.payment_reference}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-titusDarkGray p-4 rounded-md">
              <h1 className="uppercase"> Delivery Details</h1>
              <div className="mt-4 flex flex-col gap-4 flex-wrap text-sm text-gray-900">
                <div to="" className="p-3 rounded-md bg-titusLight">
                  <span className="font-medium">Address:</span>{" "}
                  <span className="">{order?.data?.address}</span>
                </div>
                <div to="" className="p-3 rounded-md bg-titusPurpleLight">
                  <span className="font-medium">Postal code:</span>{" "}
                  <span className="">{order?.data?.postal_code}</span>
                </div>
                <div to="" className="p-3 rounded-md bg-yayyuYellow">
                  <span className="font-medium">City:</span>{" "}
                  <span className="">{order?.data?.city}</span>
                </div>
                <div to="" className="p-3 rounded-md bg-titusSky">
                  <span className="font-medium">State:</span>{" "}
                  <span className="">{order?.data?.state}</span>
                </div>
                <div to="" className="p-3 rounded-md bg-titusYellowLight">
                  <span className="font-medium">Country:</span>{" "}
                  <span className="">{order?.data?.country}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {orderLoading ? <Loader /> : null}
      {orderError ? <ErrorWidget error={orderError} /> : null}
    </div>
  );
};

export default SingleOrderPage;
