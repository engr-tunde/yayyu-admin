import { useFormikContext } from "formik";

const SubmitButton = ({ title, className, disabled = false }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  const label = isSubmitting ? "Loading..." : title;

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className={`${className} py-1 hover:scale-105 ease-in duration-200 rounded-md`}
      disabled={disabled ? true : isSubmitting ? true : false}
      style={{
        background: isSubmitting ? "#FCBA41" : disabled ? "#FCBA41" : "#FCBA41",
        color: isSubmitting ? "#000" : disabled ? "#000" : "#000",
        border: isSubmitting && "1px solid #fff",
      }}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
