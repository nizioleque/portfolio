import clsx from "clsx";
import { Lato } from "next/font/google";
import Infobar from "./Infobar";
import MainContent from "./MainContent";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
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
          "flex h-[297mm] w-[210mm] flex-col bg-white",
          lato.className,
        )}
      >
        <Infobar />
        <MainContent />
      </div>
    </>
  );
}

export default Cv;
