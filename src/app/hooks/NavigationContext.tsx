"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  ReactNode,
  use,
  useContext,
  useEffect,
  useState,
} from "react";

const NavigationContext = createContext<{ perviousPath: string | null }>({
  perviousPath: null,
});

export function NavigationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [perviousPath, setPerviousPath] = useState<string | null>(null);

  useEffect(() => {
    setPerviousPath((perv) => pathname);
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ perviousPath }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
