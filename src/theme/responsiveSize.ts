import { mobileLayoutQuery } from "./themeBase";

export function responsiveSize(
  size: number | string,
  modifier: number = 0.8,
  propertyName: string = "fontSize"
) {
  let value, unit;

  if (typeof size === "string") {
    const match = size.match(/[a-z%]+/);
    value = parseFloat(size);
    unit = match?.[0];
  } else {
    value = size;
  }

  const valueMobile = value * modifier;

  let result, resultMobile;
  if (unit === undefined) {
    result = value;
    resultMobile = valueMobile;
  } else {
    result = `${value}${unit}`;
    resultMobile = `${valueMobile}${unit}`;
  }

  return {
    [propertyName]: result,
    [mobileLayoutQuery]: {
      [propertyName]: resultMobile,
    },
  };
}
