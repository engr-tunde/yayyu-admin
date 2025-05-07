import { useMemo } from "react";

const OTPInputField = ({
  name,
  value,
  valueLength,
  onChange,
  className,
  style,
  ...rest
}) => {
  const RE_DIGIT = new RegExp(/^\d+$/);

  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    const items = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [value, valueLength]);

  const focusToNextInput = (target) => {
    const nextElementSibling = target.nextElementSibling;
    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const focusToPrevInput = (target) => {
    const previousElementSibling = target.previousElementSibling;
    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const inputOnChange = (e, idx) => {
    const target = e.target;
    let targetValue = target.value;
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }
    const nextInputEl = target.nextElementSibling;
    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== "") {
      return;
    }
    targetValue = isTargetValueDigit ? targetValue : " ";
    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);
      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      const nextElementSibling = target.nextElementSibling;
      if (nextElementSibling) {
        nextElementSibling.focus();
      }
      if (!isTargetValueDigit) {
        return;
      }
      focusToNextInput(target);
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);
      target.blur();
    }
  };

  const inputOnKeyDown = (e) => {
    const { key } = e;
    const target = e.target;
    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;
    target.setSelectionRange(0, targetValue.length);

    if (e.key !== "Backspace" || target.value !== "") {
      return;
    }

    const previousElementSibling = target.previousElementSibling;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
    if (e.key !== "Backspace" || targetValue !== "") {
      return;
    }

    focusToPrevInput(target);
  };

  const inputOnFocus = (e) => {
    const { target } = e;
    const prevInputEl = target.previousElementSibling;
    if (prevInputEl && prevInputEl.value === "") {
      return prevInputEl.focus();
    }
    target.setSelectionRange(0, target.value.length);
  };

  return (
    // <div className="col-12 justify-content-center align-items-center">
    <div className="flex justify-between items-center w-full md:px-1 lg:px-4">
      {valueItems.map((digit, idx) => (
        <input
          key={idx}
          value={digit}
          placeholder="0"
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={inputOnKeyDown}
          onFocus={inputOnFocus}
          pattern="\d{1}"
          maxLength={valueLength}
          className="w-10 h-10 px-2 justify-center items-center text-center border-[1px] border-titusLightBorder bg-transparent"
          style={{ style }}
          {...rest}
        />
      ))}
    </div>
    // </div>
  );
};

export default OTPInputField;
