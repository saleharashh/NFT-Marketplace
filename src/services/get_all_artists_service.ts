import { Artist } from "@/app/models/Artist";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchAllArtists(): Promise<Artist[]> {
  try {
    const res = await axios.get("http://localhost:3000/artists/getAllArtists");
    return res.data.data!;
  } catch (error) {
    throw new Error("Network has Error!");
  }
}

export function useGetAllArtists() {
  return useQuery({
    queryKey: ["getAllArtists"],
    queryFn: fetchAllArtists,
  });
}
