import Image, { StaticImageData } from "next/image";

interface EducationProps {
  institution: string;
  area: string;
  title: string;
  faculty: string;
  startDate: string;
  endDate: string;
  info: Record<string, string>;
  logo: StaticImageData;
}

function Education({
  title,
  institution,
  startDate,
  endDate,
  area,
  faculty,
  info,
  logo,
}: EducationProps) {
  return (
    <div className="flex gap-4">
      <Image
        src={logo}
        alt={institution}
        width={48}
        height={48}
        className="object-contain"
        unoptimized
      />
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">{institution}</h3>
            <p className="text-lg">{title}</p>
          </div>
          <div className="text-cv-500 text-sm uppercase">
            {startDate} – {endDate}
          </div>
        </div>
        <p className="text-lg">{area}</p>
        <p className="text-cv-500">{faculty}</p>
        <ul className="ms-5 flex flex-col gap-1">
          {Object.entries(info).map(([key, value]) => (
            <li key={key} className="list-disc">
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Education;
