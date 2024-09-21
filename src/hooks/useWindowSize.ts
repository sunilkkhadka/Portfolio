import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize((prev) => {
        return {
          ...prev,
          width: window.innerWidth,
        };
      });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { windowSize };
};

export default useWindowSize;
