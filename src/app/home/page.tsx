import { getHomeData, useHomeStart } from "@/services/start_home_service";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import HomeClient from "./HomeClient";

export default async function Home() {
  const queryClient = new QueryClient();  

  await queryClient.prefetchQuery({
    queryKey: ["homestart"],
    queryFn: getHomeData,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeClient />
    </HydrationBoundary>
  );
}
