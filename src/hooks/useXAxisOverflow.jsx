import { useEffect,useState } from "react";


// This hook takes an element reference and returns true if the element has overflow in the x-axis
export function useXAxisOverflow(elementRef) {
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const hasOverflow = element.scrollWidth > element.offsetWidth;
      setHasOverflow(hasOverflow);
      

      const observer = new ResizeObserver((entries) => {
        const hasOverflow = entries[0].target.scrollWidth > entries[0].target.offsetWidth;
        setHasOverflow(hasOverflow);
      });
      observer.observe(element);
      return () => observer.disconnect();

    } else {
      setHasOverflow(false);
    }
  }, [elementRef]);
  

  return hasOverflow;
}

