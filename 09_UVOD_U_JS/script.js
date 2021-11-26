console.log("Pozdrav iz JS datoteke!");

let a = 3, b = 6;
console.log(a * b);
console.log("Vladan" + " Stojic");
console.log("Vladan" * "Stojic");

b = b / a;
console.log(a, b); // a = 3, b = 2;
a = b * a + a;
console.log(a, b); // a = 9, b = 2;
b = (a - 2 * b) / b;
console.log(a, b);

//a = a + 10;
a += 10;
console.log(a);
b /= a;
console.log(b);

//a = a + 1;
//a += 1;
a++;
console.log(a);

++a;
console.log(a);

let c = 5;

console.log(c++); // Prvo se ocita vrednost bez dodavanja ++
console.log(c);

let d = 3;
console.log(++d); // Prvo se doda ++ na postojecu vrednost
console.log(d);

c = 4;
d = 3;
x = (c++) * (--d);
console.log(c, d, x); // 

console.log(7 % 2); // 7 = 3 * 2 + 1
console.log(9 % 2); // 9 = 4 * 2 + 1
console.log(180 % 60); // 180 = 3 * 60 + 0 

// Profesor. (42 % 13) + 1 = 1 --> (1, 2, ..., 12, 13)
console.log(365 % 7);

console.log(4 ** 3);

c = 3;
d = c ** 3 + 1; // (3 ** 3) + 1 = 28
console.log(d);

