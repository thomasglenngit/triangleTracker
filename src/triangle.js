export function Triangle(side1, side2, side3) {
  console.log(side1, side2, side3);
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  debugger;
}


Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
    return "scalene triangle";
  }  else if ((this.side1 === this.side2) && (this.side2 === this.side3)) {
    return "equilateral triangle";
  } else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
      return "isosceles triangle";
  }
};



// const side3plusside1 = side1 + side3;
  // const side3plusside2 = side3 + side2;

  // if (side1plusside2 >= side3) {
  //   if (side1 === side2 && side3 === side2) {
  //     alert("Equilateral");
  //   } else if (side1 === side2 || side3 === side2 || side1 === side3) {
  //     alert("Isosceles");
  //   } else {
  //     alert("Scalene");
  //   }
  // } else if (side3plusside1 >= side2) {
  //   if (side1 === side2 && side3 === side2) {
  //     alert("Equilateral");
  // } else if (side1 === side2 || side3 === side2 || side1 === side3) {
  //   alert("Isosceles");
  // } else {
  //   alert("Scalene");
  // }
  // } else if (side3plusside2 >= a) {
  //   if (side1 === side2 && side3 === side2) {
  //     alert("Equilateral");
  //   } else if (side1 === side2 || side3 === side2 || side1 === side3) {
  //     alert("Isosceles");
  //   } else {
  //     alert("Scalene");
  //   }
  // } else {
  //   alert("not a triangle")
  // }