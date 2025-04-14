interface EducationProps {
  institution: string;
  area: string;
  title: string;
  faculty: string;
  startDate: string;
  endDate: string;
}

function Education({
  title,
  institution,
  startDate,
  endDate,
  area,
  faculty,
}: EducationProps) {
  return (
    <div className="relative flex flex-1 flex-col">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">{institution}</h3>
        <h4 className="font-semibold">{title}</h4>
        <p className="">
          {area}, {faculty}
        </p>
      </div>
      <div className="text-cv-600 absolute right-0 text-sm uppercase">
        {startDate} – {endDate}
      </div>
    </div>
  );
}

export default Education;
