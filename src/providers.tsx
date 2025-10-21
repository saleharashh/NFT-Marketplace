"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";

// const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

// declare global {
//   interface Window {
//     __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
//   }
// }

// window.__TANSTACK_QUERY_CLIENT__ = queryClient;
