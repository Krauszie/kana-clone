"use client";

import CheatsheetHiragana from "@/components/hiragana/cheatsheet-hiragana";
import KanaAnswer from "@/components/kana-answer";
import CheatsheetKatakana from "@/components/katakana/cheatsheet-katakana";
import Notes from "@/components/notes";
import { useState } from "react";

const Home = () => {
  const [selectedLists, setSelectedLists] = useState({
    hiraganaVowels: false,
    hiraganaKagyou: false,
    hiraganaSagyou: false,
    katakanaVowels: false,
    katakanaKagyou: false,
    katakanaSagyou: false,
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSelectedLists((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <section className="h-full bg-white -z-[99] rounded-xl shadow-md">
      <div className="container mx-auto p-6">
        <div className="mb-3">
          <h1 className="text-4xl text-center text-black font-extrabold">
            DJT KANA CLONE
          </h1>
        </div>
        <div>
          <div className="flex flex-col justify-center gap-y-3">
            <KanaAnswer selectedLists={selectedLists} />
            <CheatsheetHiragana
              selectedLists={selectedLists}
              handleCheckboxChange={handleCheckboxChange}
            />
            <CheatsheetKatakana
              selectedLists={selectedLists}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
        </div>
        <Notes />
      </div>
    </section>
  );
};

export default Home;
