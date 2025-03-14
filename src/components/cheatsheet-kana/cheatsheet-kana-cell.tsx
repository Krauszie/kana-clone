"use client";
import React from "react";

interface KanaCellProps {
  kanaData?: {
    kana: string;
    romaji: string;
  };
}

const CheatsheetKanaCell = ({ kanaData }: KanaCellProps) => {
  if (!kanaData) return <p>No Data Available</p>;

  return (
    <div className="flex items-center gap-3">
      <p className="text-xl font-bold">{kanaData.kana}</p>
      <p className="text-gray-600">{kanaData.romaji}</p>
    </div>
  );
};

export default CheatsheetKanaCell;
