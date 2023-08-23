// Switch Statement

// Example 1
let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Example 2
let emoji = "happy face";

switch(emoji) {
    case "sad face":
    case "happy face":
        console.log("yellow");
        break;
    case "eggplany":
        console.log("purple");
        break;
    case "heart":
    case "lips":
        console.log("red");
        break;
}