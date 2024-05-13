// task 1
/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/

class Product {
    // Property type annotations
    id: number;
    name: string;
    price: number;
  
    constructor(id: number, name: string, price: number) {
      // Constructor parameter type annotations
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    // Method type annotations
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
  }
  
  // Create an instance of the Product class
  const product1 = new Product(1, "Widget", 20.0);
  
  // Access class properties and call a method
  console.log(product1.getProductInfo()); // Output: ID: 1, Name: Widget, Price: $20

//   task 2
/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/

class MyClassPublic {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property


class MyClassPrivate {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    revealSecret() {
        console.log(this.secret); // Accessing the private property from within the class
    }
}

const instancePrivate = new MyClassPrivate("My secret");
// console.log(instance.secret); // This would result in an error because secret is private
instancePrivate.revealSecret(); // This is a valid way to access the private property


class Parent {
    protected familyName: string;

    constructor(name: string) {
        this.familyName = name;
    }
}

class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
    }
}

const parentEx = new Parent("Smith");
const childEx = new Child("Johnson");

// console.log(parent.familyName); // This would result in an error because familyName is protected
childEx.introduceFamily(); // This is a valid way to access the protected property

// task 3
/*******************
 * CLASS ACCESSORS *
 *******************/

class ProductExAccessors {
    // 'private' property
    private _price: number;
  
    constructor(private id: number, private name: string) {
      this._price = 0; // Default price
    }
  
    // 'public' getter for price
    get price(): number {
      return this._price;
    }
  
    // 'public' setter for price
    set price(newPrice: number) {
      if (newPrice >= 0) {
        this._price = newPrice;
      } else {
        console.log("Price cannot be negative.");
      }
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
  }
  
  // Create an instance of the ProductExAccessors class
  const productEx = new ProductExAccessors(1, "Widget");
  
  console.log(productEx.getProductInfo()); // Default price: ID: 1, Name: Widget, Price: $0
  
  // Use the 'setter' to update the price
  productEx.price = 20.0;
  
  console.log(productEx.getProductInfo()); // Updated price: ID: 1, Name: Widget, Price: $20
  
  // Attempting to set a negative price triggers the setter logic
  productEx.price = -5; // Price cannot be negative.

//   task 4
/************************
 * CLASS STATIC MEMBERS *
 ************************/

class ProductStaticMembers {
    // 'private' property
    private static nextId: number = 1;
  
    constructor(private id: number, private name: string) {}
  
    static generateNextId(): number {
      return ProductStaticMembers.nextId++;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  // Generate unique IDs for products using the static method
  const product1static = new ProductStaticMembers(
    ProductStaticMembers.generateNextId(),
    "Widget"
  );
  const product2static = new ProductStaticMembers(
    ProductStaticMembers.generateNextId(),
    "Gadget"
  );
  
  console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
  console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget

//   task 5
/*****************************
 * CLASS IMPLEMENT INTERFACE *
 *****************************/

class ProductImplementInterface {
    // 'private' property
    private static nextId: number = 1;
  
    constructor(private id: number, private name: string) {}
  
    static generateNextId(): number {
      return ProductImplementInterface.nextId++;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  // Generate unique IDs for products using the static method
  const product1implement = new ProductImplementInterface(
    ProductImplementInterface.generateNextId(),
    "Widget"
  );
  const product2implement = new ProductImplementInterface(
    ProductImplementInterface.generateNextId(),
    "Gadget"
  );
  
  console.log(product1implement.getProductInfo()); // ID: 1, Name: Widget
  console.log(product2implement.getProductInfo()); // ID: 2, Name: Gadget

//   task 6
/********************************
 * ABSTRACT CLASSES AND MEMBERS *
 ********************************/

abstract class AbstractItem {
    private static nextId: number = 1;
  
    constructor(public id: number, protected name: string) {}
  
    static generateNextId(): number {
      return AbstractItem.nextId++;
    }
  
    abstract getItemInfo(): string;
  }
  
  class Item extends AbstractItem {
    constructor(id: number, name: string) {
      super(id, name);
    }
  
    getItemInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Widget");
  const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Gadget");
  
  console.log(item1.getItemInfo()); // ID: 1, Name: Widget
  console.log(item2.getItemInfo()); // ID: 2, Name: Gadget

//   task 7
/**********************************
 * POLYMORPHISM & METHOD OVERRIDE *
 **********************************/

// Define an abstract class
abstract class AbstractEntity {
    private static nextId: number = 1;
    protected constructor(public id: number, protected name: string) {} // Change 'private' to 'protected'
    static generateNextId(): number {
      return AbstractEntity.nextId++;
    }
    abstract getEntityInfo(): string;
  }
  
  // Create a concrete subclass
  class Entity extends AbstractEntity {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getEntityInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  // Create another concrete subclass
  class AnotherEntity extends AbstractEntity {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getEntityInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
  }
  
  // Generate unique IDs for entities using the static method
  const entity1: AbstractEntity = new Entity(
    AbstractEntity.generateNextId(),
    "Widget"
  );
  const entity2: AbstractEntity = new AnotherEntity(
    AbstractEntity.generateNextId(),
    "Gadget"
  );
  
  // Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
  console.log(entity1.getEntityInfo()); // ID: 1, Name: Widget
  console.log(entity2.getEntityInfo()); // ID: 2, Name: Gadget, Additional Info: ...