let x = 0;
let y = 0;

let getCellDetails = ({
  //   x = 0,
  //   y = 0,
  top = true,
  left = true,
  bottom = true,
  right = true,
  isEntry = false,
  isExit = false,
}) => {
  //logic to auto fill x,y coordinates
  x += 1;
  if (x > 6) {
    y += 1;
    x = 1;
  }

  return {
    x: x - 1,
    y: y,
    top,
    left,
    bottom,
    right,
    isEntry,
    isExit,
  };
};

//each row has 6 cells and I'm using a total of 6 rows
//false value for side represents an open path
export let maze = [
  //row 1
  [
    getCellDetails({ bottom: false }),
    getCellDetails({ top: false, bottom: false, isEntry: true }),
    getCellDetails({ right: false }),
    getCellDetails({ left: false, right: false }),
    getCellDetails({ left: false, right: false, bottom: false }),
    getCellDetails({ left: false, bottom: false }),
  ],
  //row 2
  [
    getCellDetails({ top: false, right: false }),
    getCellDetails({ top: false, bottom: false, left: false, right: false }),
    getCellDetails({ right: false, left: false }),
    getCellDetails({ left: false, bottom: false }),
    getCellDetails({ top: false, bottom: false }),
    getCellDetails({ top: false }),
  ],
  //row 3
  [
    getCellDetails({ bottom: false }),
    getCellDetails({ top: false, bottom: false }),
    getCellDetails({ right: false }),
    getCellDetails({ top: false, left: false, right: false }),
    getCellDetails({ top: false, left: false }),
    getCellDetails({ bottom: false, right: false, isExit: true }),
  ],
  //row 4
  [
    getCellDetails({ top: false, bottom: false, right: false }),
    getCellDetails({ left: false, top: false, bottom: false }),
    getCellDetails({ bottom: false, right: false }),
    getCellDetails({ left: false, right: false, bottom: false }),
    getCellDetails({ left: false }),
    getCellDetails({ bottom: false, top: false }),
  ],
  //row 5
  [
    getCellDetails({ top: false, bottom: false }),
    getCellDetails({ top: false }),
    getCellDetails({ top: false, bottom: false }),
    getCellDetails({ top: false, bottom: false, right: false }),
    getCellDetails({ left: false, right: false }),
    getCellDetails({ bottom: false, top: false, left: false }),
  ],
  //row 6
  [
    getCellDetails({ top: false, right: false }),
    getCellDetails({ left: false, right: false }),
    getCellDetails({ top: false, left: false }),
    getCellDetails({ top: false }),
    getCellDetails({ right: false }),
    getCellDetails({ top: false, left: false }),
  ],
];

