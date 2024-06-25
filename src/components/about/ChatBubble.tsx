import { Typography } from "@mui/material";
import bubbleTail from "../../assets/bubble-tail.svg";

const triangleHeight = 40;
const triangleWidth = 30;

interface ChatBubbleProps {
  children: string;
}

function ChatBubble({ children }: ChatBubbleProps) {
  return (
    <Typography
      variant="h2"
      sx={{
        fontStyle: "italic",
        fontWeight: 700,
        letterSpacing: -4,

        position: "relative",

        paddingY: 1,
        paddingX: 3,
        borderRadius: 10,

        backgroundColor: "background.light",
        color: "primary.main",

        "&::before": {
          content: '""',
          position: "absolute",

          bottom: 0,
          right: `calc(100% - ${triangleWidth * 0.6}px)`,

          width: triangleWidth,
          height: triangleHeight,

          maskImage: `url(${bubbleTail.src})`,
          maskSize: `${triangleWidth}px ${triangleHeight}px`,
          backgroundColor: "background.light",
        },
      }}
    >
      {children}
    </Typography>
  );
}

export default ChatBubble;
