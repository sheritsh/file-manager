export function center(str, width) {
  str = String(str);
  const pad = width - str.length;
  const padLeft = Math.floor(pad / 2);
  const padRight = pad - padLeft;
  return ' '.repeat(padLeft) + str + ' '.repeat(padRight);
}

export function getLsTableWidths(allItems) {
  const nameColWidth =
    Math.max(' Name '.length, ...allItems.map((item) => item.name.length + 2)) + 2;
  const typeColWidth =
    Math.max(' Type '.length, ...allItems.map((item) => item.type.length + 2)) + 2;
  const indexColWidth = Math.max('(index)'.length, String(allItems.length - 1).length) + 2;
  return { nameColWidth, typeColWidth, indexColWidth };
}

export function getLsTableBorder(indexColWidth, nameColWidth, typeColWidth) {
  return (
    '+' +
    '-'.repeat(indexColWidth) +
    '+' +
    '-'.repeat(nameColWidth) +
    '+' +
    '-'.repeat(typeColWidth) +
    '+'
  );
}

export function getLsTableHeader(indexColWidth, nameColWidth, typeColWidth) {
  return [
    center('(index)', indexColWidth),
    center(' Name ', nameColWidth),
    center(' Type ', typeColWidth),
  ].join('|');
}
