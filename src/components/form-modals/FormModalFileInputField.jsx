const FormModalFileInputField = ({
  label,
  handleChange,
  name,
  nameText,
  error,
  multiple = false,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        className="text-xs text-gray-400 flex items-center gap-2 cursor-pointer"
        htmlFor={name}
      >
        <img alt="" src="/assets/images/upload.png" width={28} height={28} />
        <span>{nameText.length ? nameText : label}</span>
      </label>
      <input
        type="file"
        id={name}
        className="hidden"
        name={name}
        onChange={handleChange}
        multiple={multiple}
      />
      {error.length ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
};

export default FormModalFileInputField;
