// import { useEffect, useState } from "react";

// function useScreenSizeItemsForArtists() {
//   const [items, setItems] = useState(getItems(window.innerWidth));

//   function getItems(width: number) {
//     if (width < 768) return 1; // sm
//     if (width < 1024) return 2; // md
//     return 3; // lg
//   }

//   useEffect(() => {
//     function handleResize() {
//       setItems(getItems(window.innerWidth));
//     }
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return items;
// }

// export default useScreenSizeItemsForArtists;
