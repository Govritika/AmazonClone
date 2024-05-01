//concept of classes and functions

// class Product{
//     constructor(itemName,price,discount,productCode){
//         this.itemName=itemName;
//         this.discount=discount;
//         this.price=price;
//         this.productCode=productCode;
//     }
// }
// let pencil=new Product('pencil',20,2,'f40');

// const Product1=class Product{
//     constructor(itemName,price,discount,productCode){
//         this.itemName=itemName;
//         this.discount=discount;
//         this.price=price;
//         this.productCode=productCode;
//     }
//     get getDiscount(){
//         return this.discount;
//     }
//     set setDiscount(value){
//         this.discount=value;
//     }
// };
// let chair=new Product1('chair',199,16,'c20');


//extending a class-

// class Product{
//     constructor(itemName){
//         this.itemName=itemName;
//     }
//     getItemName(){
//         return this.itemName+" is a product";
//     }
// }
// class Furniture extends Product{
//     constructor(itemName){
//         super(itemName);
//     }
    // getItemName(){
//         return this.itemName+" is a furniture";
//     }
// }

// let chair=new Furniture('chair');
// let pencil=new Product('pencil');

