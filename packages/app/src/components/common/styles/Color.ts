const ValidColorList = [
  "#ffffff",
  "#000000",
  "#ff0000",
  "#993333",
  "#006699",
  "#3399cc",
  "#003366",
  "#33cc99",
  "#28df99",
  "#ccffcc",
  "#99ccff",
  "rgba(240,240,240,0.3)",
  "rgba(120,120,120,0.3)",
  "rgba(112,112,112,0.4)",
] as const;
export type Colors = typeof ValidColorList[number];
export const IsSolidColor = (x: any): x is Colors => ValidColorList.includes(x);

export function ToRgbA(colorCode: string, opacity: number) {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(colorCode)) {
    c = colorCode.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join("")}`;
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ","
    )},${opacity})`;
  }
  if (/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.test(colorCode)) {
    const rgb = colorCode
      .substring(4, colorCode.length - 1)
      .replace(/ /g, "")
      .split(",");
    return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity})`;
  }
  throw new Error("Bad Hex");
}

export const White: Colors = "#ffffff";
export const Black: Colors = "#000000";

export const PrimaryRed: Colors = "#ff0000";
export const SecondaryRed: Colors = "#993333";

export const PrimaryBlue: Colors = "#006699";

export const Light: Colors = "rgba(240,240,240,0.3)";
export const LightBlue: Colors = "#3399cc";

export const DarkBlue: Colors = "#003366";

export const PrimaryGray: Colors = "rgba(112,112,112,0.4)";
export const SecondaryGray: Colors = "rgba(120,120,120,0.3)";

export const PrimaryGreen: Colors = "#33cc99";
export const SecondaryGreen: Colors = "#28df99";

export const Mint: Colors = "#ccffcc";
export const Sky: Colors = "#99ccff";
