"use client";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import CheatsheetKanaCell from "./cheatsheet-kana-cell";
import Checkbox from "../common/checkbox";

interface CheatsheetKanaProps {
  type: "hiragana" | "katakana";
  selectedLists: {
    vowels: boolean;
    kagyou: boolean;
    sagyou: boolean;
  };
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: {
    vowels: { kana: string; romaji: string }[];
    kagyou: { kana: string; romaji: string }[];
    sagyou: { kana: string; romaji: string }[];
  };
}

const CheatsheetKana = ({
  type,
  selectedLists,
  handleCheckboxChange,
  data,
}: CheatsheetKanaProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center bg-gray-500 cursor-pointer p-2 rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {type === "hiragana" ? "Hiragana" : "Katakana"} Cheatsheet{""}
        {isOpen ? (
          <FaAngleUp className="mx-3" />
        ) : (
          <FaAngleDown className="mx-3" />
        )}
      </div>

      {isOpen && (
        <div className="border border-gray-300 rounded-b-lg overflow-hidden m-2">
          <table className="w-full">
            <thead className="bg-gray-500">
              <tr>
                <th className="p-3 text-left">
                  <Checkbox
                    name={`${type}Vowels`}
                    label="Vowels"
                    checked={selectedLists.vowels}
                    onChange={handleCheckboxChange}
                  />
                </th>
                <th className="p-3 text-left">
                  <Checkbox
                    name={`${type}Kagyou`}
                    label="Kagyō"
                    checked={selectedLists.kagyou}
                    onChange={handleCheckboxChange}
                  />
                </th>
                <th className="p-3 text-left">
                  <Checkbox
                    name={`${type}Sagyou`}
                    label="Sagyō"
                    checked={selectedLists.sagyou}
                    onChange={handleCheckboxChange}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <td className="p-3 text-black">
                    <CheatsheetKanaCell kanaData={data.vowels[index]} />
                  </td>
                  <td className="p-3 text-black">
                    <CheatsheetKanaCell kanaData={data.kagyou[index]} />
                  </td>
                  <td className="p-3 text-black">
                    <CheatsheetKanaCell kanaData={data.sagyou[index]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CheatsheetKana;
