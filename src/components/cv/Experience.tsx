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
    <div className="flex flex-col gap-2">
      <div className="flex gap-3">
        <div className="size-[40px]">
          <Image src={logo} alt={company} width={40} height={40} />
        </div>
        <div className="flex flex-1 flex-col justify-around">
          <div className="flex items-baseline">
            <h3 className="text-lg/none font-bold">{company}</h3>
            <div className="text-cv-600 ms-auto text-sm/none uppercase">
              {startDate} - {endDate}
            </div>
          </div>
          <p className="text-base/none">{title}</p>
        </div>
      </div>
      <ul className="ms-5 flex flex-col gap-0">
        {description.map((item, index) => (
          <li
            key={index}
            className="list-disc text-justify leading-5.5 [&>strong]:font-semibold"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
