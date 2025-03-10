import React from "react";

interface CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ name, label, checked, onChange }: CheckboxProps) => {
  return (
    <label className="flex items-center gap-2">
      <span className="text-white">{label}</span>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
    </label>
  );
};

export default Checkbox;
