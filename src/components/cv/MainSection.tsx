import { ReactNode } from "react";

interface MainSectionProps {
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
}

function MainSection({ title, subtitle, children }: MainSectionProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <h2 className="text-cv-700 text-xl font-medium uppercase">{title}</h2>
        {subtitle && (
          <div className="text-cv-700 text-sm italic underline">{subtitle}</div>
        )}
        <div className="border-cv-700/50 ms-2 -me-6 flex flex-1 items-center gap-2 border-t-2" />
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-6">{children}</div>
    </div>
  );
}

export default MainSection;
