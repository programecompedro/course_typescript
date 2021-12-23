type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callBackFN: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callBackFN(array[i]));
  }

  return newArray;
}

const abc = ["a", "b", "c"];
const abcMapped = mapStrings(abc, (item) => item.toLocaleUpperCase());
console.log(abcMapped);
