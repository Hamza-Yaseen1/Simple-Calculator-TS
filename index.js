import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number :", type: "number", name: "firstNumber" },
    { message: "Enter Second number :", type: "number", name: "secondNumber" },
    {
        message: "Select operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional Statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
