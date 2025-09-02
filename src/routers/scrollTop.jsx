import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Using requestAnimationFrame for smoother transition
    const timeout = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => cancelAnimationFrame(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
