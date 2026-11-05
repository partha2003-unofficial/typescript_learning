/*
Why do we need Generics?: 
 Suppose you create a function that returns the value passed to it.
** suppose you create a function that is pass number or boolean , then you have to create two same function with different types -- generics solve the problem

but i can solve this problem with any , but there is a problem that is 
: generic preserve the type information but the any remove the type safety , you can perform any thing on any type , like you can do number's operation on string , but this is not true 
that is the problem that is solve by the generics
*/

function returnAny<t>(item: t): t[] {
    return [item];
}
function returnMultipule<A, B>(itemA: A, itemB: B): [A, B] {
    return [itemA, itemB]
}

returnAny(10)
returnAny('partha')

returnMultipule('partha', 47)

/* Generic interface */
interface box<T> {
    content: T
}
const numberBox: box<string> = {
    content: 'partha'
}
/* 
** you can create all kind of things using generics (function,class,function,vaiable,partial,pick,emit etc..)
real usecase : api response handles etc .
*/