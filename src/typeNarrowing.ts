/* typeNarrowing  */
function getVariable(kind: string | number) {
    if (typeof kind === "string") {
        return `making this type of variable ${kind}` // guaranted that it return string
    }
    return `returning this type of kind ${kind}` // guaranted that it return number
}

/* truthyness checking */
function serveChai(kind?: string) {
    if (kind) {
        return `this type of chai are returning ${kind}`
    }
    return `this is the default chai type returning `
}


class myName {
    name() {
        return `my name is partha pratim samanata`
    }
}
class fatherName {
    name() {
        return `my father name is haradhan samanta`
    }
}
function nameCalling(name: myName | fatherName) {
    if (name instanceof myName) {
        return name.name;
    }
}

/*custom types*/
type chaiOrder = {
    type: string,
    suger: number
}
function isChaiOrder(obj: any): obj is chaiOrder { //it take any type but is retun with custom type it is basically type safety
    return (
        typeof obj === "object" &&
        obj != null &&
        typeof obj.type === 'string' &&
        typeof obj.suger === 'number'
    )
}
function serveOrder(item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with ${item.suger}suger`
    }
    return `serving custom chai :${item}`
}
//custom types of custom type
type masalaChai = { type: "masala"; spicelevel: number }
type elichiChai = { type: "elichi"; amount: number }
type gingerChai = { type: "ginger"; eroma: number }
type chai = masalaChai | elichiChai | gingerChai

function makeChai(oder: chai) {
    switch (oder.type) {
        case "elichi":
            return `masala chai`
            break;
        case "ginger":
            return `ginger chai`
            break;
        case "elichi":
            return `elichi chai`
            break;

        default:
            return `custom chai`
            break;
    }
}