import Image from "next/image";
import { useRouter } from "next/router";

interface ScreenshotProps {
  filename: string;
  aspectRatio: number;
}

function Screenshot({ filename, aspectRatio }: ScreenshotProps) {
  const { pathname } = useRouter();
  const isCard = ["/", "/projects"].includes(pathname);

  const width = isCard ? 420 : 800;
  const height = width / aspectRatio;

  return (
    <Image
      src={`/screenshots/${filename}.png`}
      alt=""
      width={width}
      height={height}
      quality={90}
      style={{ display: "block", margin: "16px 0" }}
    />
  );
}

export default Screenshot;
