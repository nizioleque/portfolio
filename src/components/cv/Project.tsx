import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  type: string;
  users?: number;
  rating?: number;
  description: string;
  href?: string;
  logo: StaticImageData;
  techStack?: string[];
  year: string;
}

function Project({
  title,
  type,
  users,
  rating,
  description,
  href,
  logo,
  techStack,
  year,
}: ProjectProps) {
  return (
    <a href={href} target="_blank">
      <div className="flex items-start gap-3">
        <Image
          src={logo}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />
        <div className="flex flex-1 flex-col">
          <div className="flex items-baseline">
            <h3 className="text-lg/6 font-bold">{title}</h3>
            <div className="text-cv-600 ms-auto text-sm/none uppercase">
              {year}
            </div>
          </div>
          <div className="">
            {type}
            <span className="text-cv-600 text-sm">
              {techStack && (
                <>
                  {" · "}
                  {techStack.join(", ")}
                </>
              )}
              {users && (
                <>
                  {" · "}
                  {users.toLocaleString("en-US")} users
                </>
              )}
              {rating && (
                <>
                  {" · "}
                  {rating}/5 rating
                </>
              )}
            </span>
          </div>
          <p className="">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default Project;
