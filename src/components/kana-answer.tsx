"use client";
import React, { useEffect, useMemo, useState } from "react";
import Input from "./common/input";
import Button from "./common/button";
import {
  hiraganaListKagyou,
  hiraganaListSagyou,
  hiraganaListVowels,
} from "@/data/hiragana-data";
import {
  katakanaListKagyou,
  katakanaListSagyou,
  katakanaListVowels,
} from "@/data/katakana-data";

interface KanaItem {
  id: number;
  romaji: string;
  hiragana?: string;
  katakana?: string;
}

interface KanaAnswerProps {
  selectedLists: {
    hiraganaVowels: boolean;
    hiraganaKagyou: boolean;
    hiraganaSagyou: boolean;
    katakanaVowels: boolean;
    katakanaKagyou: boolean;
    katakanaSagyou: boolean;
  };
}

const KanaAnswer = ({ selectedLists }: KanaAnswerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [isQuestionCounted, setIsQuestionCounted] = useState(false);

  const activeList = useMemo(() => {
    const listMappings = [
      { condition: selectedLists.hiraganaVowels, list: hiraganaListVowels },
      { condition: selectedLists.hiraganaKagyou, list: hiraganaListKagyou },
      { condition: selectedLists.hiraganaSagyou, list: hiraganaListSagyou },
      { condition: selectedLists.katakanaVowels, list: katakanaListVowels },
      { condition: selectedLists.katakanaKagyou, list: katakanaListKagyou },
      { condition: selectedLists.katakanaSagyou, list: katakanaListSagyou },
    ];

    // Filter and flatten the lists based on selected conditions
    const activeLists = listMappings
      .filter(({ condition }) => condition) // Keep only selected lists
      .flatMap(({ list }) => list as KanaItem[]); // Flatten into single array

    for (let i = activeLists.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [activeLists[i], activeLists[j]] = [activeLists[j], activeLists[i]];
    }

    return activeLists;
  }, [selectedLists]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeList]);

  const checkAnswer = () => {
    const isCorrect =
      userInput.toLowerCase() === activeList[currentIndex].romaji;
    const { hiragana, romaji } = activeList[currentIndex];

    setResult(
      isCorrect ? "Correct!" : `Incorrect, try again! ${hiragana} = ${romaji}`
    );

    if (!isQuestionCounted) {
      setTotalQuestions((prev) => prev + 1);
      if (isCorrect) {
        setCorrectCount((prev) => prev + 1);
      }
      setIsQuestionCounted(true);
    }

    if (isCorrect) {
      setCurrentIndex((prev) => (prev + 1) % activeList.length);
      setUserInput("");
      setIsQuestionCounted(false);
    }
  };

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, checked } = e.target;
  //   setSelectedLists((prev) => ({
  //     ...prev,
  //     [name]: checked,
  //   }));
  //   setCurrentIndex(0);
  // };

  const isAnyListSelected = Object.values(selectedLists).some((value) => value);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-black">
        {activeList[currentIndex]?.hiragana ||
          activeList[currentIndex]?.katakana}
      </h1>
      {!isAnyListSelected && (
        <p className="text-red-500">Please pick the options!</p>
      )}
      <div className="text-lg text-gray-600">
        Progress: {correctCount}/{totalQuestions}
      </div>
      <Input
        className="w-64"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && checkAnswer()}
        disabled={!isAnyListSelected}
      />
      <Button
        className="w-64"
        onClick={checkAnswer}
        disabled={!isAnyListSelected}
      >
        <p>Submit</p>
      </Button>
      {result && (
        <p
          className={`text-lg ${
            result === "Correct!" ? "text-green-500" : "text-red-500"
          }`}
        >
          {result}
        </p>
      )}
    </div>
  );
};

export default KanaAnswer;
