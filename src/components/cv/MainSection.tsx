import { ReactNode } from "react";

interface MainSectionProps {
  title: string;
  children: ReactNode;
}

function MainSection({ title, children }: MainSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <h2 className="text-cv-700 text-lg font-semibold uppercase">{title}</h2>
        <div className="border-cv-700 -me-6 flex flex-1 items-center gap-2 border-t-2" />
      </div>
      <div className="grid grid-cols-1 gap-6">{children}</div>
    </div>
  );
}

export default MainSection;
