import React, { useState } from "react";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import Checkbox from "../common/checkbox";

interface CheatsheetKanaCombiProps {
  type: "hiragana" | "katakana";
  selectedLists: {
    kyagyou: boolean;
    shagyou: boolean;
    chagyou: boolean;
    nyagyou: boolean;
  };
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: {
    kyagyou: { kana: string; romaji: string }[];
    shagyou: { kana: string; romaji: string }[];
    chagyou: { kana: string; romaji: string }[];
    nyagyou: { kana: string; romaji: string }[];
  };
}

const CheatsheetKanaCombi = ({
  type,
  selectedLists,
  handleCheckboxChange,
}: // data,
CheatsheetKanaCombiProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center bg-gray-500 cursor-pointer p-2 rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {type === "hiragana" ? "Hiragana" : "Katakana"} Cheatsheet{" "}
        {isOpen ? (
          <FaAnglesUp className="mx-3" />
        ) : (
          <FaAnglesDown className="mx-3" />
        )}
      </div>

      {isOpen && (
        <div className="border border-gray-300 rounded-b-lg overflow-hidden m-2">
          <table className="w-full">
            <thead className="bg-gray-500">
              <tr>
                <th className="p-3 text-left">
                  <Checkbox
                    name={`${type}Kyagyou`}
                    label="Kyagyō"
                    checked={selectedLists.kyagyou}
                    onChange={handleCheckboxChange}
                  />
                </th>
                <th className="p-3 text-left">
                  <Checkbox
                    name={`${type}Shagyou`}
                    label="Shagyō"
                    checked={selectedLists.shagyou}
                    onChange={handleCheckboxChange}
                  />
                </th>
                <th className="p-3 text-left">
                  <Checkbox
                    name={`${type}Chagyou`}
                    label="Chagyō"
                    checked={selectedLists.chagyou}
                    onChange={handleCheckboxChange}
                  />
                </th>
                <th className="p-3 text-left">
                  <Checkbox
                    name={`${type}Nyagyou`}
                    label="Nyagyō"
                    checked={selectedLists.nyagyou}
                    onChange={handleCheckboxChange}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 3 }).map((_, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  {/* <td className="p-3 text-black">
                    <CheatsheetKanaCell kanaData={data.kyagyou[index]} />
                  </td>
                  <td className="p-3 text-black">
                    <CheatsheetKanaCell kanaData={data.shagyou[index]} />
                  </td>
                  <td className="p-3 text-black">
                    <CheatsheetKanaCell kanaData={data.chagyou[index]} />
                  </td>
                  <td className="p-3 text-black">
                    <CheatsheetKanaCell kanaData={data.nyagyou[index]} />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CheatsheetKanaCombi;
