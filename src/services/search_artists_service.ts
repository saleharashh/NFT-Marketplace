import { Artist } from "@/app/models/Artist";
import axiosClient from "@/lib/axiosClient";
import { useMutation } from "@tanstack/react-query";

async function searchArtists(search: string): Promise<Artist[]> {
  try {
    const res = await axiosClient.get(
      `/artists/getAllArtists?search=${search}`
    );
    return res.data.data;
  } catch (error) {
    throw new Error("Network has Error!");
  }
}

export function useSearchArtists(search: string) {
  const { mutate, data, isPending, isError, error } = useMutation<
    Artist[],
    Error
  >({
    mutationKey: ["searchArtsits"],
    mutationFn: () => searchArtists(search),
  });
  return {
    mutate,
    artists: data,
    isPending,
    searchIsError: isError,
    searchError: error,
  };
}
