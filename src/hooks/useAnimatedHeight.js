import { useEffect, useRef, useState } from "react";

const useAnimatedHeight = (isOpen) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return { contentRef, height, setHeight };
};

export default useAnimatedHeight;