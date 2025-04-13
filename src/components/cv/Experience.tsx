import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
interface ExperienceProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  logo: StaticImageData;
  description: ReactNode[];
}

function Experience({
  title,
  company,
  startDate,
  endDate,
  logo,
  description,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <Image src={logo} alt={company} width={40} height={40} unoptimized />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg/5 font-bold">{company}</h3>
          <p className="">{title}</p>
        </div>
        <div className="text-cv-500 ms-auto text-sm uppercase">
          {startDate} - {endDate}
        </div>
      </div>
      <ul className="ms-5 flex flex-col gap-1">
        {description.map((item, index) => (
          <li key={index} className="list-disc [&>strong]:font-bold">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
