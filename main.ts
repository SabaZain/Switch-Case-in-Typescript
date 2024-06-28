// Switch Case - In TypeScript, a switch case is a control flow statement that allows a variable to be tested for equality against a list of values. 
// Each value is called a case, and the variable being switched on is checked for each case.

// Example 1
let fruit = "Strawberry"
switch(fruit){
    case "Orange" :
        console.log("Oranges are round citrus fruits with orange color.");
        break;
    case "Banana" :
        console.log("Bananas are yellow in color and good for health.");
        break;
    case "Apple" :
        console.log("An apple a day keeps doctor away! Apples are in red, yellow or green color.");
        break;
    case "Strawberry" :
        console.log("Strawberries are small, red in color and juicy fruit.");
        break;
    default:
        console.log("Unknown Fruit");
}

// Example 2
let Subject = "Urdu";
switch(Subject){
    case "English" :
        console.log("Obtained A grade in English Subject.");
        break;
    case "Maths" :
        console.log("Obtained A+ grade in Maths Subject.");
        break;
    case "Physics" :
        console.log("Obtained A grade in Physics Subject.");
        break;
    case "History" :
        console.log("Obtained B grade in History Subject.");
        break;
    case "Urdu" :
        console.log("Obtained B+ grade in Urdu Subject.");
        break;
    default:
        console.log("Unknown Subject");
}

// Example 3
let age = 25
switch(true){
    case (age <= 2):
        console.log("You are a baby");
        break;
    case (age > 2 && age <= 4) :
        console.log("You ara toddler");
        break;
    case (age > 4 && age <= 13) :
        console.log("You ara a kid");
        break;
    case (age > 13 && age < 20) :
        console.log("Yor are a teenager");
        break;
    case (age >= 20 && age < 65) :
        console.log("You are an adult");
        break;
    default:
        console.log("You are older");
}
