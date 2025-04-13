import Infobar from "./Infobar";
import MainContent from "./MainContent";

function Cv() {
  return (
    <div className="flex h-[297mm] w-[210mm] bg-white font-[Aptos]">
      <Infobar />
      <MainContent />
    </div>
  );
}

export default Cv;
