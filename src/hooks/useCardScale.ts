import { useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import CardContainerContext from "../contexts/CardContainerContext";

export default function useCardScale() {
  const { scrollContainer } = useContext(CardContainerContext);

  const cardContainerRef = useRef<HTMLAnchorElement>(null);

  const { scrollYProgress: scrollYProgressTop } = useScroll({
    container: scrollContainer,
    target: cardContainerRef,
    offset: ["end 0.5vh", "start 3vh"],
    layoutEffect: false,
  });

  const { scrollYProgress: scrollYProgressBottom } = useScroll({
    container: scrollContainer,
    target: cardContainerRef,
    offset: ["end 97vh", "start 99.5vh"],
    layoutEffect: false,
  });

  const transformOrigin = useRef<"bottom" | "center" | "top">("center");

  const scrollYProgressCombined = useTransform(
    [scrollYProgressTop, scrollYProgressBottom],
    ([latestTop, latestBottom]: number[]) => {
      if (!cardContainerRef.current) return 0;

      if (latestTop === 1 && latestBottom === 0) {
        transformOrigin.current = "center";
        return 1;
      }

      if (latestTop < 1 - latestBottom) {
        transformOrigin.current = "bottom";
        return latestTop;
      } else {
        transformOrigin.current = "top";
        return 1 - latestBottom;
      }
    }
  );

  const originY = useTransform(scrollYProgressCombined, () => {
    switch (transformOrigin.current) {
      case "top":
        cardContainerRef.current?.classList.remove("transform-origin-bottom");
        cardContainerRef.current?.classList.add("transform-origin-top");
        return 0;
      case "center":
        cardContainerRef.current?.classList.remove("transform-origin-top");
        cardContainerRef.current?.classList.remove("transform-origin-bottom");
        return 0.5;
      case "bottom":
        cardContainerRef.current?.classList.remove("transform-origin-top");
        cardContainerRef.current?.classList.add("transform-origin-bottom");
        return 1;
    }
  });

  return {
    scrollYProgress: scrollYProgressCombined,
    originY,
    cardContainerRef,
    transformOrigin,
  };
}
