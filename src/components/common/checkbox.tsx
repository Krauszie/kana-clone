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
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;
