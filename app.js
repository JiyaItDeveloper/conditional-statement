//Task # 2 (CONDITIONAL STATEMENT)
import chalk from "chalk";
//Marksheet using (IF / ELSE /ELSEIF)
let percentage = 50;
if (percentage >= 90) {
    console.log(chalk.bgRedBright.bold("\tA+1 Grade"));
}
else if (percentage >= 80 && percentage <= 89) {
    console.log(chalk.bgRedBright.bold("\tA Grade"));
}
else if (percentage >= 70 && percentage <= 79) {
    console.log(chalk.bgRedBright.bold("\tB Grade"));
}
else if (percentage >= 60 && percentage <= 69) {
    console.log(chalk.bgRedBright.bold("\tC Grade"));
}
else if (percentage >= 50 && percentage <= 59) {
    console.log(chalk.bgRedBright.bold("\tD Grade"));
}
else if (percentage >= 40 && percentage <= 49) {
    console.log(chalk.bgRedBright.bold("E Grade"));
}
else {
    console.log(chalk.bgRedBright.bold("Fail"));
}
//**************************************If/ Else/ Else if conditions */
let age = 17;
if (age <= 16) {
    console.log(chalk.bgBlueBright.bold("\n\tYou are to young for  apply CNIC"));
}
else if (age >= 18) {
    console.log(chalk.bgBlueBright.bold("\n\tYou can apply for CNIC"));
}
else {
    console.log(chalk.bgBlueBright.bold("\n\tYou are child"));
}
//*************************************(and &&    OR|| condition) */
let Myname = "Jiya";
Myname = "komal";
let Nickname = "Sadia";
console.log(Myname == Myname);
console.log(Myname !== Myname);
console.log(Myname && Nickname);
console.log(Myname || Nickname);
console.log(Myname === Nickname);
