import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  type: string;
  users?: number;
  rating?: number;
  description: string;
  href: string;
  logo: StaticImageData;
}

function Project({
  title,
  type,
  users,
  rating,
  description,
  href,
  logo,
}: ProjectProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      <div className="flex gap-4">
        <Image
          src={logo}
          alt={title}
          width={48}
          height={48}
          className="object-contain"
          unoptimized
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="text-cv-500">
            {type}

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
          </div>
          <p className="text-cv-500">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default Project;
