export const Remove = (array: Array<any>, value: any): Array<any> => {
  let idx = -1;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) idx = i;
  }
  if (idx < 0) {
    console.log("util.Remove:: element wasn't found in the given array");
    return array;
  }
  const newArr = [...array];
  newArr.splice(idx, 1);
  return newArr;
};

export const UniqueKey = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return `_${Math.random().toString(36).substr(2, 9)}`;
};

export const UniqueKeyArray = function (length: number) {
  const keys: Array<string> = [];
  for (let i = 0; i < length; i += 1) {
    keys.push(UniqueKey());
  }
  return keys;
};

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
