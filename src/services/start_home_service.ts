import { HomeStart } from "@/app/models/HomeStart";
import axiosClient from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";
async function fetchDataHomeStart(screenSize: number): Promise<HomeStart> {
  try {
    const res = await axiosClient.get("/home/start", {
      params: { screenSize: screenSize },
    });
    return res.data.data;
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
