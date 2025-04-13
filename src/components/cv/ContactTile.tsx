import clsx from "clsx";
import { ReactNode } from "react";

interface ContactTileProps {
  icon: ReactNode;
  label: string;
  href?: string;
  size?: "normal" | "small";
}

function ContactTile({ icon, label, href, size = "normal" }: ContactTileProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 font-semibold",
        size === "normal" && "text-lg [&_svg]:size-6!",
        size === "small" && "text-base [&_svg]:mr-0.5 [&_svg]:size-5.5!",
      )}
    >
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
