import { ReactNode } from "react";

interface ContactTileProps {
  icon: ReactNode;
  label: string;
  href?: string;
}

function ContactTile({ icon, label, href }: ContactTileProps) {
  return (
    <div className="flex items-center gap-3 [&_svg]:size-5!">
      {icon}
      {href ? (
        <a href={href} target="_blank">
          {label}
        </a>
      ) : (
        label
      )}
    </div>
  );
}

export default ContactTile;
