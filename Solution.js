function convert(s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const rows = new Array(numRows).fill('');
  let currentRow = 0;
  let isMovingDown = true;

  for (const char of s) {
    rows[currentRow] += char;

    if (currentRow === 0) {
      isMovingDown = true;
    } else if (currentRow === numRows - 1) {
      isMovingDown = false;
    }

    currentRow += isMovingDown ? 1 : -1;
  }

  return rows.join('');
}

const s = "PAYPALISHIRING";
const numRows = 4;
const result = convert(s, numRows);
console.log(result);
