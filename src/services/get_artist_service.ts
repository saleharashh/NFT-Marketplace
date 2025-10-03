import { Artist } from "@/app/models/Artist";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchArtists(): Promise<Artist> {
  try {
    const res = await axios.get("http://localhost:3000/artists/getArtist", {
      params: { id: 1 },
    });
    return res.data;
  } catch (error) {
    throw new Error("Network response was not Ok");
  }
  //   const res = await fetch("http://localhost:3000/artists/getArtist?id=2");
  //   if (!res.ok) throw new Error("Network response was not ok");
  //   return res.json();
}

export function useArtists() {
  return useQuery<Artist, Error>({
    queryKey: ["artists"],
    queryFn: fetchArtists,
  });
}
