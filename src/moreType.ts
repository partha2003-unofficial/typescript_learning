/* forcefull type assertion */
let response: any = '35454';
let responseLength: number = (response as string).length;
console.log(responseLength);

/*forcefully define that the bookString is a string */
type Book = {
    name: string
}

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject)

/*any vs unknown */
let value: any = "partha";
value = 646;
value = {
    name: 'pritwish',
    age: 33
}
value.toUpperCase(); // there is no problem but when i run this code there is problem because the value is now a object

let newValue: unknown = "partha";
newValue = 646;
newValue = {
    name: 'pritwish',
    age: 33
}

if (typeof newValue === 'string') { //now in the unknown you should define the data type to access that 
    newValue.toUpperCase();
}

/*never data type */
type Role = "admin" | 'user' ;
function redirectBasedOnRole(role: Role): void {
    if (role == "admin") {
        console.log('this is admin page ');
        return;
    }
    if (role === 'user') {
        console.log('this is user page');
        return;
    }
    role; //it is return never : because the all posiable types are defined
}