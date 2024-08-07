import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { MutableRefObject } from "react";
import { CardImageSize } from "../../constants";
import { responsiveSize } from "../../theme/responsiveSize";
import { ProjectMeta } from "../../types";
import ExpandableCard from "./ExpandableCard";

export type CardContentProps = {
  project: ProjectMeta;
  zIndex: MutableRefObject<number>;
};

function CardContent({ project, zIndex }: CardContentProps) {
  return (
    <ExpandableCard
      hue={project.hue}
      id={project.id}
      zIndex={zIndex}
      content={
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingX: 2,
            justifyContent: "center",
            gap: 1,
          }}
        >
          {project.icon && (
            <Box
              component={Image}
              alt={`${project.name} icon`}
              src={project.icon}
              sx={{
                ...responsiveSize(CardImageSize, undefined, "height"),
                ...responsiveSize(CardImageSize, undefined, "width"),
                objectFit: "contain",
              }}
            />
          )}
          <Box>
            <Typography
              variant="h3"
              textAlign="center"
              sx={{
                ...responsiveSize("1.3rem"),
                whiteSpace: "pre-line",
                marginBottom: 0.5,
              }}
            >
              {project.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                ...responsiveSize("1.25rem"),
                textAlign: "center",
                fontVariant: "small-caps",
              }}
            >
              {(project.cardLabel ?? project.category).toLowerCase()}
            </Typography>
          </Box>
        </Box>
      }
    />
  );
}

export default CardContent;
