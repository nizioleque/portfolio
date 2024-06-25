export const shadowStrong = "4px 4px 4px rgba(0, 0, 0, 0.6)";
export const shadowWeak = "2px 2px 4px rgba(0, 0, 0, 0.35)";

export const scrollbarStyles = {
  "::-webkit-scrollbar": {
    width: 16,
  },
  "::-webkit-scrollbar-thumb": {
    borderRadius: "999px",
    backgroundClip: "padding-box",
    backgroundColor: "rgb(255 255 255 / 24%)",
    border: "4px solid transparent",
    "&:hover": {
      backgroundColor: "rgb(255 255 255 / 48%)",
    },
  },
};
