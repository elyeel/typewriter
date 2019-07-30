const sentence = "hello there from lighthouse labs\n";
// for (const char of sentence) {
//   setTimeout(() => {
//       process.stdout.write(char);
//       // console.log(' ');
//   }, 1000)
// };
// setTimeout(() => {
//   for (const char of sentence) {
//     // 
//     console.log(char);
//   }
// },1000)char
// for (const char of sentence) {
//   process.stdout.write(char);
//   setTimeout(() => {},5000);
// };
// for (const char of sentence) {
//   setTimeout((process.stdout.write(char)) , 500)
// }
let time = 500;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, time);
  time += 500;
};