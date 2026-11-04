/*extract type and execute in a object*/

type coffe = {
    type: string,
    ingridieant: string,
    cup: number
}

const coffee: coffe = {
    type: 'ginger',
    ingridieant: 'milk',
    cup: 54
}

//spliting the types to better understanding 
type Item = { name: string, quantity: number }
type address = { street: string, pin: number }

type order = {
    id: string,
    item: Item[], // item type of array
    address: address
}

/* partial 
    Partial<update> makes all properties of the update type optional inside the function parameter.
*/
type update = {
    name: string;
    price: number;
    isHot: boolean
}
const updateChai = (updates: Partial<update>) => {
    console.log("update", updates)
}
updateChai({ price: 45 })

/*
   required : 
            this is same case whare the type is required if you make the type in optional or not 
 */
type updateYourChai = {
    name?: string;
    price?: number;
    isHot?: boolean
}
const updateYourMasalaChai = (updates: Required<updateYourChai>) => {
    console.log("update your masala chai: ", updates)
}
updateYourMasalaChai({ //all required to fill if the type is optional or not 
    price: 45,
    name: 'masala chai',
    isHot: true
})

/*
  pick : is pick form a spacific type (only this types are available)
 */
type coffee = {
    name?: string;
    price?: number;
    isHot?: boolean
}
type BasicCoffee = Pick<coffee, 'isHot' | 'price'>
const updateYourMasalaCoffee = (updates: BasicCoffee) => {
    //only this two types are available in this function
    updates.isHot = true;
    updates.price = 645;
}

/* omit */
type coffeeOmit = {
    name?: string;
    price?: number;
    isHot?: boolean
}
type secretIngrident = Omit<coffeeOmit, 'isHot' | 'price'> // "isHot" and "price" is not required to fill