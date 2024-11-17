
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
};
