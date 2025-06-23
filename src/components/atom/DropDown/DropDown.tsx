"use client";
import React from "react";
import Select, {
  Props as ActionMeta,
  SingleValue,
  MultiValue,
  components,
} from "react-select";
import { useLenis } from "lenis/react";
import Icons from "../Icons/Icon";
import { twMerge } from "tailwind-merge";

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
  menuPlacement?: "top" | "bottom";
  valueIndex?: number;
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

const Dropdown: React.FC<Props> = ({
  options,
  onChange,
  className,
  menuPlacement,
  valueIndex = 0,
}) => {
  const handleChange: SelectChangeHandler = (newValue, actionMeta) => {
    onChange(newValue as SelectOption | SelectOption[] | null, actionMeta);
  };
  const lenis = useLenis();

  return (
    <div className={twMerge(`inline-block min-w-full w-full`, className)}>
      <Select
        unstyled
        options={options}
        onChange={handleChange}
        className="inline-block w-full"
        classNamePrefix="select"
        menuPlacement={menuPlacement}
        placeholder="Select"
        menuPortalTarget={
          typeof window !== "undefined" ? document.body : undefined
        }
        // onMenuOpen={() => lenis?.stop()}
        // onMenuClose={() => lenis?.start()}
        defaultMenuIsOpen={false}
        components={{
          DropdownIndicator: CustomDropdownIndicator,
        }}
        classNames={{
          input: () => "py-2",
          control: (
            state
          ) => `bg-transparent px-0 pb-3 rounded-0 border-b rounded-0 border-b border-[#5420AF] border-opacity-20 text-lg md:text-xl lg:text-2xl w-full
          ${state.isFocused ? "" : ""} ${state.menuIsOpen ? "" : ""}`,
          placeholder: () => "text-black opacity-80",
          //   dropdownIndicator: () =>
          //     "pl-1 py-0.5 [&>svg]:opacity-0 bg-no-repeat bg-center bg-no-repeat",
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
        defaultValue={options[valueIndex]}
      />
    </div>
  );
};
export default Dropdown;
