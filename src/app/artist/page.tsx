import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
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
