import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (
  threshold: number = 0.1
): [React.RefObject<HTMLElement>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Stop observing once intersected
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return [elementRef, isIntersecting];
};

export default useIntersectionObserver;
