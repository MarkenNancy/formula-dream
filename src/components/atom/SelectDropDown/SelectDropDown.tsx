"use client";
import React, { useEffect, useState } from "react";
import Select, {
  Props as ActionMeta,
  SingleValue,
  MultiValue,
  components,
} from "react-select";
// import { useLenis } from "lenis/react";
import Icons from "../Icons/Icon";
import { twMerge } from "tailwind-merge";
import Label from "../Label/Label";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export type SelectOption = {
  label: string;
  value: string | number;
};

export type Props = {
  options: SelectOption[];
  isMulti?: boolean;
  onChange: (
    value: SelectOption | SelectOption[] | null,
    actionMeta: ActionMeta<SelectOption>
  ) => void;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  error?: string;
  menuPlacement?: "top" | "bottom";
  valueIndex?: number;
  selectedValue?: string;
};
/* eslint-disable */
const CustomDropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icons name="arrow-right" size={0.8} className="rotate-90 -mb-0.5" />
    </components.DropdownIndicator>
  );
};
export type SelectChangeHandler = (
  newValue: SingleValue<SelectOption> | MultiValue<SelectOption>,
  actionMeta: ActionMeta<SelectOption>
) => void;

const SelectDropDown: React.FC<Props> = ({
  options,
  onChange,
  className,
  menuPlacement,
  style,
  label,
  error,
  selectedValue,
}) => {
  const handleChange: SelectChangeHandler = (newValue, actionMeta) => {
    onChange(newValue as SelectOption | SelectOption[] | null, actionMeta);
    // setValue(newValue);
  };
  // const lenis = useLenis();

  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    if (selectedValue) {
      const selectedOptionIndex = options.findIndex(
        (option) => option.value === selectedValue
      );
      setValue(selectedOptionIndex);
    } else {
      setValue(null);
    }
  }, [selectedValue]);

  return (
    <div
      className={twMerge(`inline-block min-w-full w-full`, className)}
      style={style}
    >
      {label && <Label className="md:mb-1">{label}</Label>}
      <Select
        unstyled
        options={options}
        onChange={handleChange}
        className={`block w-full !h-8 overflow-hidden border-b ${
          error ? "border-red-500" : "border-[#C3C3C3]"
        }`}
        classNamePrefix="select"
        menuPlacement={menuPlacement}
        placeholder=""
        menuPortalTarget={
          typeof window !== "undefined" ? document.body : undefined
        }
        // onMenuOpen={() => lenis?.stop()}
        // onMenuClose={() => lenis?.start()}
        // defaultMenuIsOpen={true}
        components={{
          DropdownIndicator: CustomDropdownIndicator,
        }}
        classNames={{
          container: () => "w-full ",
          input: () => "pb-0",
          control: (
            state
          ) => `!min-h-8 bg-transparent px-0 pb-0 rounded-0 text-sm md:text-base w-full
          ${state.isFocused ? "" : ""} ${state.menuIsOpen ? "" : ""}`,
          placeholder: () => "text-black opacity-80 !min-h-8",
          //   dropdownIndicator: () =>
          //     "pl-1 py-0.5 [&>svg]:opacity-0 bg-no-repeat bg-center bg-no-repeat",
          menuPortal: () => "!z-10",
          menu: () =>
            "bg-[#F7F7F7] border border-[#E8E8E8] rounded-md rounded-t-0 mt-0.5 shadow-100 min-w-fit text-lg [&>div]:!max-h-max",
          option: ({
            isFocused,
            isSelected,
          }) => `px-3 py-2.5 relative text-black hover:cursor-pointer hover:bg-gray-200 hover:text-black
          ${isSelected ? "!bg-gray-200 !text-black" : "text-black"}
          ${isFocused ? "bg-gray-200 text-black hover:bg-gray-200" : ""} 
          `,
          noOptionsMessage: () =>
            "text-sm text-gray-100 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm",
        }}
        isSearchable={false}
        value={value !== null ? options[value] : null}
        // defaultValue={options[valueIndex]}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
};
export default SelectDropDown;
