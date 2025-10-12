import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export async function getHomeData() {
  try {
    const res = await axios.get("http://localhost:3000/home/start", {
      params: { screenSize: 1 },
    });
    return res.data;
  } catch (e) {
    throw new Error("Network response was not Ok");
  }
}

async function fetchDataHomeStart(screenSize: number) {
  try {
    const res = await axios.get("http://localhost:3000/home/start", {
      params: { screenSize: screenSize },
    });
    return res.data;
  } catch (e) {
    throw new Error("Network response was not Ok");
  }
}

export const useHomeStart = (screenSize: number) => {
  return useQuery({
    queryKey: ["home_start", screenSize],
    queryFn: () => fetchDataHomeStart(screenSize),
  });
};
