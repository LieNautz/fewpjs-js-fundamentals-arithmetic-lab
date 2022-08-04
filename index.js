// describe('index.js', function() {
//     describe('multiply', function() {
//       it("is an equation whose multiplied results will equal 62", function() {
//         expect(num1).to.be.a('number')
//         expect(num2).to.be.a('number')
//         expect(multiply).to.eq(62)
//       });

// });
// describe('random', function() {
//   it("generates a random integer greater than 0", function() {
//     expect(Number.isInteger(random)).to.be.true
//     expect(random).to.not.eq(0)
//   });
// });

// describe('mod', function() {
//     it("is an equation that calculates a remainder that is equal to 4", function() {
//       expect(num3).to.be.a('number')
//       expect(num4).to.be.a('number')
//       expect(mod).to.eq(4)
//     });
//   });

// });
// describe('max', function() {
//   it("will return 20 as the highest number in the set", function() {
//     expect(max).to.eq(20)
//   });
// });
// });

// Write your code here


let num1 = 1;
let num2 = 62;

let multiply= (num1*num2);

let random= Math.round(Math.random()* 10) + 1;

let num3 = 50;
let num4 = 46;

let mod = (num3%num4);

let max = Math.max(1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20);