import { useMemo } from "react";

const useFeaturedF1 = (allF1s) => {
    const featuredF1 = useMemo(() => {
        if(allF1s.length) {
          const randomIndex = Math.floor(Math.random() * allF1s.length);
          return allF1s[randomIndex];
        }
      }, [allF1s]);
    
    return featuredF1;
}
 
export default useFeaturedF1;