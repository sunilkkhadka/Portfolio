import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function toggleVisibility() {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return createPortal(
    isVisible && (
      <div className="top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    ),
    document.getElementById("back-to-top") as Element
  );
};

export default BackToTop;
