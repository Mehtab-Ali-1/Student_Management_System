import inquirer from "inquirer";
import chalk from "chalk";

let condition = true;

while(condition){
    console.log (chalk.bold.red(`\n\t******* WellCome to Coding World *******\t\n`));
    // *********  for student NAME and ID  ***********
    let stuName = await inquirer.prompt([
        {
            name : "Name",
            type : "input",
            message : chalk.bgYellow("Enter your Name:")
        }
    ]);
    let stuId = Math.floor(Math.random()*1000031+7);
    console.log(chalk.green(`\tStudent Name: ${stuName.Name} \n\tStudent Id: ${stuId}`));
    // ********************************************************************************
    
    // *********  for course options  ***********
    let course = await inquirer.prompt([
        {
            name : "Course",
            type : "list",
            choices : [`Graphic designing`,`Web development`,`Cyber security`,`Amazon`,`Daraz`],
            message : chalk.bgYellow("Please select your course:")
        }
    ]);
    console.log(chalk.green(`\n\tCourse: ${course.Course}`));
    // ********************************************************************************
    
    // *********  for fee inquiry  ***********
    let fee = await inquirer.prompt([
        {
            name : "Fee",
            type : "list",
            choices : [`Graphic designing`,`Web development`,`Cyber security`,`Amazon`,`Daraz`],
            message : chalk.bgYellow("Please select which course fee")
        }
    ]);
    if (fee.Fee === "Graphic designing"){
        console.log(chalk.green(`\tGraphic designing fee : 5000`));
    }else if (fee.Fee === "Web development"){
        console.log(chalk.green(`\tWeb development fee : 3000`));
    }else if (fee.Fee === "Cyber security"){
        console.log(chalk.green(`\tCyber security fee : 7000`));
    }else if (fee.Fee === "Amazon"){
        console.log(chalk.green(`\tAmazon fee : 10000`));
    }else if (fee.Fee === "Daraz"){
        console.log(chalk.green(`\tDaraz fee : 6000`));
    }
    // ********************************************************************************
    
    // *********  for fee pay  ***********
    let balance = 10000;
    let feePay = await inquirer.prompt([
        {
            name : "FeePay",
            type : "number",
            message : chalk.bgYellow("Please enter your fee amount:")
        }
    ]);
    if (feePay.FeePay > balance){
        console.log(chalk.red(`\tYou have insufficient balance. \n\tYour current balance is: ${balance} `)); 
        break;
    }
    else if (feePay.FeePay <= balance){
        let remainBalance = balance -= feePay.FeePay
        console.log(chalk.green(`You have successfully submitted fee : ${feePay.FeePay}`))
        console.log(chalk.magenta(`Your remaining balance is ${remainBalance}`));
    }
    // ********************************************************************************
    
    // *********  for Show status / Balance check / Exit  ***********
    let status = await inquirer.prompt([
        {
            name : "Status",
            type : "list",
            choices : ["Show Status","Check balance","Exit"],
            message : chalk.bgYellow("Please select one")
        }
    ]);
    if (status.Status === "Show Status"){
        console.log(chalk.bgWhiteBright(`\tName : ${stuName.Name},\n\tCourse : ${course.Course},\n\tFee : ${feePay.FeePay}`));
    }
    else if (status.Status === "Check balance"){
        console.log(chalk.magenta(`Your current balance is : ${balance}`));
    }
    else if (status.Status === "Exit"){
        break;
    }
    // ********************************************************************************
    
    // *********  Add new student  ***********
    let newStu = await inquirer.prompt([
        {
            name : "NewStu",
            type : "list",
            choices : [`Add New Student`,`Exit`],
            message : chalk.bgYellow("DO you want to add new student:")
        }
    ]);
    if(newStu.NewStu === "Add New Student"){
        continue;
    }else if(newStu.NewStu === "Exit"){
        break;
    }   
}
// ********************************************************************************


None of this would have been possible without the incredible support and guidance from our mentors, especially my Honnorable Teacher