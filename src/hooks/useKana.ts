import {
  hiraganaCombiListChagyou,
  hiraganaCombiListKyagyou,
  hiraganaCombiListNyagyou,
  hiraganaCombiListShagyou,
} from "@/data/hiragana-combi-data";
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

const useKanaData = () => {
  const hiraganaData = {
    vowels: hiraganaListVowels.map(({ hiragana, romaji }) => ({
      kana: hiragana,
      romaji,
    })),
    kagyou: hiraganaListKagyou.map(({ hiragana, romaji }) => ({
      kana: hiragana,
      romaji,
    })),
    sagyou: hiraganaListSagyou.map(({ hiragana, romaji }) => ({
      kana: hiragana,
      romaji,
    })),
  };

  const hiraganaCombiData = {
    kyagyou: hiraganaCombiListKyagyou.map(({ hiraganaCombi, romaji }) => ({
      kana: hiraganaCombi,
      romaji,
    })),
    shagyou: hiraganaCombiListShagyou.map(({ hiraganaCombi, romaji }) => ({
      kana: hiraganaCombi,
      romaji,
    })),
    chagyou: hiraganaCombiListChagyou.map(({ hiraganaCombi, romaji }) => ({
      kana: hiraganaCombi,
      romaji,
    })),
    nyagyou: hiraganaCombiListNyagyou.map(({ hiraganaCombi, romaji }) => ({
      kana: hiraganaCombi,
      romaji,
    })),
  };

  const katakanaData = {
    vowels: katakanaListVowels.map(({ katakana, romaji }) => ({
      kana: katakana,
      romaji,
    })),
    kagyou: katakanaListKagyou.map(({ katakana, romaji }) => ({
      kana: katakana,
      romaji,
    })),
    sagyou: katakanaListSagyou.map(({ katakana, romaji }) => ({
      kana: katakana,
      romaji,
    })),
  };

  return { hiraganaData, hiraganaCombiData, katakanaData };
};

export default useKanaData;
