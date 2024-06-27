import { hireMe } from "@/atoms/experiments";
import useCardScale from "@/hooks/useCardScale";
import { useRecoilValue } from "recoil";
import HomePageChild from "../Layout/HomePageChild";
import Card from "./Card";

function HireMeCard() {
  const { cardContainerRef, originY, scrollYProgress } = useCardScale();

  const isVisible = useRecoilValue(hireMe);
  if (!isVisible) return null;

  const hue = 338;

  return (
    <HomePageChild>
      <Card
        className="animation-child-positioned"
        hue={338}
        ref={cardContainerRef}
        style={{
          scale: scrollYProgress,
          originY,
          originX: 0.5,
          aspectRatio: "1 / 1",
          zIndex: 1,
          paddingTop: 0,
        }}
        bright
      >
        {Array.from({ length: 10 }).map((_, index) => {
          const mainIndex = 4;
          const distFromMain = Math.abs(index - mainIndex);
          const opacity = 0.85 - distFromMain * 0.15;

          return (
            <h2
              key={index}
              style={{
                fontSize: "1.65rem",
                color: index === mainIndex ? `hsl(${hue} 100% 95%)` : "inherit",
                fontWeight: index === mainIndex ? 700 : "inherit",
                opacity: index === mainIndex ? 1 : opacity,
                letterSpacing: -1,
                margin: "-8px 0",
                position: "relative",
                top: -16,
                fontStyle: "italic",
              }}
            >
              Hire me!
            </h2>
          );
        })}
      </Card>
    </HomePageChild>
  );
}

export default HireMeCard;
