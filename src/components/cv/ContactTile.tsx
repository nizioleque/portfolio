import { ReactNode } from "react";

interface ContactTileProps {
  icon: ReactNode;
  label: string;
  href?: string;
}

function ContactTile({ icon, label, href }: ContactTileProps) {
  return (
    <a href={href} target="_blank">
      <div className="flex items-center gap-3 [&_svg]:size-5!">
        {icon}
        {label}
      </div>
    </a>
  );
}

export default ContactTile;
