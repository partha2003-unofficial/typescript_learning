function partha(para: string): string {
    return `hello ${para}`
}

const result: String = partha("partha");
console.log(result)

/* this variable will be only string and number , no other types */
let name: string | number = "partha";

/* In this variable there are three types of string you can assign */
let api: 'pending' | 'success' | 'reject' = 'pending';

const arr = ['45', '56', '450', '6566'];
let value: string | undefined;

for (let a of arr) {
    if (a === '450') {
        value = a;
    }
}
console.log(value);