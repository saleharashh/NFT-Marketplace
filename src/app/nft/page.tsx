import { Suspense } from "react";
import NftClient from "./NftClient";

export default function NFTPage() {
  
  return (
<Suspense>
        <NftClient />
      </Suspense>    
  );
}
