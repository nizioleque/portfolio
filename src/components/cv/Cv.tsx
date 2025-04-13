import Infobar from "./Infobar";
import MainContent from "./MainContent";

function Cv() {
  return (
    <>
      <style jsx global>{`
        html {
          font-size: 14px;
        }

        @page {
          margin: 0;
          size: 210mm 297mm;
        }
      `}</style>
      <div className="flex h-[297mm] w-[210mm] bg-white font-[Aptos]">
        <Infobar />
        <MainContent />
      </div>
    </>
  );
}

export default Cv;
