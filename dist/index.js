function partha(para) {
    return `hello ${para}`;
}
/* this variable will be only string and number , no other types */
let name = "partha";
/* In this variable there are three types of string you can assign */
let api = 'pending';
const arr = ['45', '56', '450', '6566'];
let value;
for (let a of arr) {
    if (a === '450') {
        value = a;
    }
}
console.log(value);
const result = partha("partha");
console.log(result);
export {};
//# sourceMappingURL=index.js.map