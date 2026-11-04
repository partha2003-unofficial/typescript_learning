//different types of array
const chai: string[] = ['masalachai', 'adrakchai'];
const rating: Array<number> = [334, 64];

//array of object
type chai = {
    name: string,
    price: number
}
const menu: chai[] = [
    { name: 'adrak', price: 58 },
    { name: 'elichi', price: 47 }
]

//readOnly array : this is not modifyable array
const city: readonly string[] = ['kolkata', 'mumbai'];

//2d array
const rice: number[][] = [
    [1, 2, 3],
    [4, 5, 2]
]

//tuples : diffrent types of data types in a single array
let tuples: [string, number, boolean?];
tuples = ['partha', 645, true]

//named tuples
const nameTuples: readonly [name: string, age: number] = ['partha', 47];

//enums
enum cupSize {
    small, //by default it stored o
    large, //by default it stored 1
    medium //2
}
const size = cupSize.large;

enum status {
    pending = 100,// it stored 100
    rejected, //by default it stored 101
    cerved // by default it stored 102
}
const API_status = status.pending;
/* enum : I.standed practice is stored a enum block one same datatype , not severel datatypes 
            but you can do it ,
          II. by default enum stored const keyword , but you can add const keyword by yours
          like this : 
                    const enum status {
                        pending = 100,// it stored 100
                        rejected, //by default it stored 101
                        cerved // by default it stored 102
                        }
 */