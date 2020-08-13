import { Select, Container } from "./styles";
import React, { useRef, useEffect } from "react";

import { useField } from "@rocketseat/unform";

interface PageInputProps {
  name: any;
  label: String;
  options: any;
  multiple?: Boolean;
  onInit?: any;
  width: any;
}

const ReactSelect: React.FC<PageInputProps> = ({
  name,
  label,
  options,
  multiple,
  onInit,
  width,
  ...rest
}) => {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  function parseSelectValue(selectRef: any) {
    const selectValue = selectRef.state.value;

    // if (selectValue?.length === 0) {
    //   return null;
    // }
    if (!multiple) {
      return selectValue ? selectValue.id : "";
    }
    return selectValue ? selectValue.map((option: any) => option.id) : [];
  }
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current || undefined,
      path: "state.value",
      parseValue: parseSelectValue,
      clearValue: (selectRef: any) => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName, options]); // eslint-disable-line
  function getDefaultValue() {
    if (!defaultValue) return null;
    if (!multiple) {
      return options.find((option: any) => option.id === defaultValue);
    }
    return options.filter((option: any) => defaultValue.includes(option.id));
  }
  return (
    <Container width={width}>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Select
        name={fieldName}
        aria-label={fieldName}
        options={options}
        isMulti={multiple}
        ref={ref}
        getOptionValue={(option: any) => option.id}
        getOptionLabel={(option: any) => option.name}
        defaultValue={getDefaultValue()}
        {...rest}
        theme={(theme: any) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#EBEBF5",
            primary: "#EBEBF5",
            primary50: "#EBEBF5",
            neutral0: "#6A6180",
          },
        })}
      />

      {error && <span>{error}</span>}
    </Container>
  );
};

export default ReactSelect;
