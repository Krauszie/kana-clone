"use client";

import CheatsheetKanaCombi from "@/components/cheatsheet-kana-combi/cheatsheet-kana-combi";
import CheatsheetKana from "@/components/cheatsheet-kana/cheatsheet-kana";
import KanaAnswer from "@/components/kana-answer";
import Notes from "@/components/notes";
import useKanaData from "@/hooks/useKana";
import { useState } from "react";

const Home = () => {
  const { hiraganaData, hiraganaCombiData, katakanaData } = useKanaData();
  const [selectedLists, setSelectedLists] = useState({
    hiraganaVowels: false,
    hiraganaKagyou: false,
    hiraganaSagyou: false,

    hiraganaCombiKyagyou: false,
    hiraganaCombiShagyou: false,
    hiraganaCombiChagyou: false,
    hiraganaCombiNyagyou: false,

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
            <CheatsheetKana
              type="hiragana"
              selectedLists={{
                vowels: selectedLists.hiraganaVowels,
                kagyou: selectedLists.hiraganaKagyou,
                sagyou: selectedLists.hiraganaSagyou,
              }}
              handleCheckboxChange={handleCheckboxChange}
              data={hiraganaData}
            />
            <CheatsheetKanaCombi
              type="hiragana"
              selectedLists={{
                kyagyou: selectedLists.hiraganaCombiKyagyou,
                shagyou: selectedLists.hiraganaCombiShagyou,
                chagyou: selectedLists.hiraganaCombiChagyou,
                nyagyou: selectedLists.hiraganaCombiNyagyou,
              }}
              handleCheckboxChange={handleCheckboxChange}
              data={hiraganaCombiData}
            />
            <CheatsheetKana
              type="katakana"
              selectedLists={{
                vowels: selectedLists.katakanaVowels,
                kagyou: selectedLists.katakanaKagyou,
                sagyou: selectedLists.katakanaSagyou,
              }}
              handleCheckboxChange={handleCheckboxChange}
              data={katakanaData}
            />
          </div>
        </div>
        <Notes />
      </div>
    </section>
  );
};

export default Home;
