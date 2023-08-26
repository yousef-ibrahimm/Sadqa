import axios from "axios";

export async function fetchQuran() {
  const response = await axios.get(
    "http://api.alquran.cloud/v1/quran/quran-uthmani"
  );
  return response.data;
}
