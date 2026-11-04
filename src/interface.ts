/* at first difine the type of the funtion's paramiter and the define in the funtion
   *difine repeted part in a single type 

   leteral types : type cupSize = 'water' | 'milk'; (this not a primitive type)
 */
type typeOrder = {
    type: string,
    suger: number,
    strong: boolean
}

function makeChai(order: typeOrder) {
    console.log(order)
}

function serveChai(order: typeOrder) {
    console.log(order)
}

/*interface */
type cupSize = {
    water: number;
    milk: number
}
interface TeaRescipe {
    water: number;
    milk: number;
}

/*
type cupSize = 'water' | 'milk';
this is not valid beacuse : 

 ** A class can only implement an object type or intersection of object types with statically known members.
so allways create interface to impliments in a class beacuse the class is allways take object types 
*/

class MasalaChai implements cupSize {
    water = 34;
    milk = 34;
}
class GingerChai implements TeaRescipe {
    water = 20;
    milk = 0;
}


/*So, why does interface exist?
An interface can be declared more than once with the same name in the same scope. TypeScript combines the declarations.

  interface CupSize {
   water: number;
  }

  interface CupSize {
    milk: number;
  }

  const cup: CupSize = {
    water: 250,
    milk: 100
  };
*/

type BaseChai = { teaLeaves: number };
type extra = { masala: number };

type masalaChai = BaseChai & extra;
const cup: masalaChai = {
    teaLeaves: 2,
    masala: 3
}

// optional type 
type user = {
    userName: string,
    bio?: string //you did give or did not (optional)
}
const user1: user = { userName: 'partha' }

//readonly 
type app = {
    readonly appName: string, //only excution one time and it did not assign next time 
    about?: string //you did give or did not (optional)
}
const application: app = { appName: 'partha' };