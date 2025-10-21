import { Artist } from "@/app/models/Artist";
import axiosClient from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";

export async function getArtist(id: string) {
  try {
    const res = await axiosClient.get("/artists/getArtist", {
      params: { id: id },
    });
    return res.data.data!;
  } catch (error) {
    throw new Error("Network response was not Ok");
  }
}
export function useArtists(id: string) {
  return useQuery<Artist, Error>({
    queryKey: ["getArtist"],
    queryFn: () => getArtist(id),
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
