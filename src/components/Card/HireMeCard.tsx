import { hireMe } from "@/atoms/experiments";
import useCardScale from "@/hooks/useCardScale";
import useCardSize from "@/hooks/useCardSize";
import { shadowWeak } from "@/theme/constants";
import { responsiveSize } from "@/theme/responsiveSize";
import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import HomePageChild from "../Layout/HomePageChild";
import Card from "./Card";

function HireMeCard() {
  const { cardContainerRef, originY, scrollYProgress } = useCardScale();
  const cardWidth = useCardSize();

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
          maxWidth: cardWidth,
        }}
        bright
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            gap: 12,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              ...responsiveSize("1rem"),
              color: `hsl(${hue} 100% 95%)`,
              letterSpacing: +1,
              textShadow: shadowWeak,
              lineHeight: 1.3,
            }}
          >
            I&apos;m looking for
            <br />
            job opportunities
          </Typography>
          <Typography
            variant="h2"
            sx={{
              ...responsiveSize("1.65rem"),
              color: `hsl(${hue} 100% 95%)`,
              letterSpacing: -1,
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            Hire me!
          </Typography>
        </div>
      </Card>
    </HomePageChild>
  );
}

export default HireMeCard;
