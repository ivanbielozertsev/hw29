const calc = {
  read() {
    this.a = +prompt("Введите число a")
    this.b = +prompt("Введите число b")
    if (this.a === null || isNaN(this.a) ||  this.b === null || isNaN(this.b)) {
      return alert("вы ввели не число");
    }
  },
  sum() {
    if (this.a === null || isNaN(this.a) || this.b === null || isNaN(this.b) ) {
      return ("вы ввели не число")
    } else {
      return this.a + this.b;
    }
  },
  mul() {
    if (this.a === null || isNaN(this.a) || this.b === null || isNaN(this.b)) {
      return ("вы ввели не число")
    } else {
      return this.a * this.b;
    }
  },
};

calc.read();
alert(calc.sum());
alert(calc.mul())