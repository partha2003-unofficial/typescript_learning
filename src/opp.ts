class Chai {
    flavour: string;
    price: number

    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
    }
}

const AdrakChai = new Chai('adrak', 78)

//access modifiers
class Address {
    public vill: string = 'sultanpur'; //public access modifier
    private post: string = 'amdabad'; //private access modifier
    #dist: string = 'purba medinipur' //this is another example of private access modifier
    protected pin: number = 721649 // it is access on the parent class and chlid classes

    getpost() {
        return this.post;
    }
    getdist() {
        return this.#dist
    }
}
const myvill = new Address();
class MyAddress extends Address { //extending a class form another class
    getPin() {
        return this.pin // access another class            
    }
}

abstract class MyPrivetAddress {
    vill: string;
    post: string;
    constructor(vill: string, post: string) {
        this.vill = vill;
        this.post = post
    }
}
class AccessPrivetAddress extends MyPrivetAddress {
    vill: string = 'dhamtouri'
}
// ** const AccessPrivetAddress = new MyPrivetAddress() //Cannot create an instance of an abstract class.



/*
1. Private keyword:
   private means a property or method can only be accessed inside the class where it is declared.
   ** good practice in typescript : in private key use _ prefix (_post)

   2. Protected keyword:
   protected means a property or method can be accessed:
   - Inside its own class.
   - Inside child classes through inheritance.
   - But not directly outside the class.

   3. static keyword: 
   static variable belongs to the parent class itself, not to individual objects(instance) or class.
    Use          case              Example
   Utility     methods	    Calculator operations
   Common      constants	Application configuration
   Counting    objects	    Total registered instances
   Factory     methods	    Creating objects through class methods

   4. abstract class :
   You cannot create an object directly from an abstract class. 
   Instead, other classes inherit from it and implement its required functionality.
   class obj1 extends obj {}; --> only allows
   const obj1 = new obj()   --> can't allows

   Feature	              Abstract class	    Interface
  Properties	              Yes	              Yes
  Method                      implementation	  Yes	No (method signatures only)
  Constructor	              Yes	              No
  Inheritance	              extends	          implements
  Create object directly	  No	              No

  Multiple inheritance/contracts	Only one class can be extended	Multiple interfaces can be implemented
 */