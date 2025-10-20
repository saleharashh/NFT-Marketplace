import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { getArtist, useArtists } from "@/services/get_artist_service";
import OwnedNFTs from "./components/ArtistNFTs";
import ArtistLoadingSkeleton from "./components/ArtistLoadingSkeleton";
import ArtistClient from "./ArtistClient";
import { Suspense } from "react";

export default async function Artist() {
  const queryClient = new QueryClient();


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense>
        <ArtistClient />
      </Suspense>
    </HydrationBoundary>
  );
}
