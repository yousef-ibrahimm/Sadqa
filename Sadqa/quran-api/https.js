import axios from "axios";
import { EXPO_PUBLIC_API_QURAN } from "@env";

export async function fetchChapters() {
  const response = await axios.get(EXPO_PUBLIC_API_QURAN + "/chapters");
  return response.data.chapters;
}

export async function fetchSurah(chapterId) {
  const response = await axios.get(
    `${EXPO_PUBLIC_API_QURAN}/quran/verses/uthmani?chapter_number=${chapterId}`
  );
  return response.data.verses;
}
