import clsx from "clsx";
import { Source_Sans_3 } from "next/font/google";
import Infobar from "./Infobar";
import MainContent from "./MainContent";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

function Cv() {
  return (
    <>
      <style jsx global>{`
        html {
          font-size: 10pt;
        }

        @page {
          margin: 0;
          size: 210mm 297mm;
        }
      `}</style>
      <div
        className={clsx(
          "text-cv-950 flex h-[297mm] w-[210mm] flex-col bg-white",
          sourceSans3.className,
        )}
      >
        <Infobar />
        <MainContent />
      </div>
    </>
  );
}

export default Cv;
