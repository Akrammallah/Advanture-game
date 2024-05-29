import inquirer from "inquirer";
import chalk from "chalk";

class player {
  name: string;
  fuel = 100;
  constructor(name:string){
    this.name = name;
  }
  fuelDecrease(){
    let fuel = this.fuel -25
    this.fuel = fuel
  }
  fuelIncrease(){
    this.fuel = 100;
  }
}
class Enemy {
  name: string;
  fuel = 100;
  constructor(name:string){
    this.name = name;
  }
  fuelDecrease(){
    let fuel = this.fuel -25
    this.fuel = fuel
  }
}
 let p1 = await inquirer.prompt([
      {
        name: "select",
        type:"input",
        message: "Enter your name"
      }
    ]);
    let op1 = await inquirer.prompt([
      {
        name: "select",
        type:"list",
        message: "select your opposite",
        choices: ["witch","bogambo","samba"]
      }
    ]);

    let player1 = new player(p1.select);
    let opposite = new player(op1.select);
  
    do {
      if(op1.select === "witch" ){
        let ask = await inquirer.prompt([
          {
            name: "opt",
            type:"list",
            message: "select your option",
            choices: ["Attack","Drink portion","Run for your life"] 
          }
        ]);
    
        
    if(ask.opt === "Attack"){
          let num = Math.floor(Math.random()*2);
          if(num > 0){
           player1.fuelDecrease()
           console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
           console.log(chalk.bold.green(`${Enemy.name} fuel is ${opposite.fuel}`))
          if(player1.fuel <= 0){
           console.log(chalk.bold.grey.italic("you loose better luck next time"));
           process.exit()
           
          }
          }
          
          if(num <= 0){
            opposite.fuelDecrease()
            console.log(chalk.bold.blue(`${player1.name} fuel is ${player1.fuel}`));
            console.log(chalk.bold.yellow(`${opposite.name} fuel is ${opposite.fuel}`));
            if(opposite.fuel <= 0){
              console.log(chalk.bold.grey.italic("you won the battle"));
              process.exit();
            }
          }
  }
        if(ask.opt === "Drink portion"){
         player1.fuelIncrease();
           console.log(chalk.blue.bold(` you drink fuel portion your fuel is ${player1.fuel}`));
           }
         if(ask.opt === "Run for your life"){
          console.log(chalk.red.italic("you loose better luck next time"));
          process.exit()
          }
        
          }
      if(op1.select ===  "bogambo"){
            let ask = await inquirer.prompt([
              {
                name: "opt",
                type:"list",
                message: "select your option",
                choices: ["Attack","Drink portion","Run for your life"] 
              }
            ]);
        
            
        if(ask.opt === "Attack"){
              let num = Math.floor(Math.random()*2);
              if(num > 0){
               player1.fuelDecrease()
               console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
               console.log(chalk.bold.green(`${Enemy.name} fuel is ${opposite.fuel}`))
              if(player1.fuel <= 0){
               console.log(chalk.bold.grey.italic("you loose better luck next time"));
               process.exit()
               
              }
              }
              
              if(num <= 0){
                opposite.fuelDecrease()
                console.log(chalk.bold.blue(`${player1.name} fuel is ${player1.fuel}`));
                console.log(chalk.bold.yellow(`${opposite.name} fuel is ${opposite.fuel}`));
                if(opposite.fuel <= 0){
                  console.log(chalk.bold.grey.italic("you won the battle"));
                  process.exit();
                }
              }
      }
            if(ask.opt === "Drink portion"){
             player1.fuelIncrease();
               console.log(chalk.blue.bold(` you drink fuel portion your fuel is ${player1.fuel}`));
               }
             if(ask.opt === "Run for your life"){
              console.log(chalk.red.italic("you loose better luck next time"));
              process.exit()
              }
            
              }
      if(op1.select === "samba" ){
                let ask = await inquirer.prompt([
                  {
                    name: "opt",
                    type:"list",
                    message: "select your option",
                    choices: ["Attack","Drink portion","Run for your life"] 
                  }
                ]);
            
                
            if(ask.opt === "Attack"){
                  let num = Math.floor(Math.random()*2);
                  if(num > 0){
                   player1.fuelDecrease()
                   console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
                   console.log(chalk.bold.green(`${Enemy.name} fuel is ${opposite.fuel}`))
                  if(player1.fuel <= 0){
                   console.log(chalk.bold.grey.italic("you loose better luck next time"));
                   process.exit()
                   
                  }
                  }
                  
                  if(num <= 0){
                    opposite.fuelDecrease()
                    console.log(chalk.bold.blue(`${player1.name} fuel is ${player1.fuel}`));
                    console.log(chalk.bold.yellow(`${opposite.name} fuel is ${opposite.fuel}`));
                    if(opposite.fuel <= 0){
                      console.log(chalk.bold.grey.italic("you won the battle"));
                      process.exit();
                    }
                  }
          }
                if(ask.opt === "Drink portion"){
                 player1.fuelIncrease();
                   console.log(chalk.blue.bold(` you drink fuel portion your fuel is ${player1.fuel}`));
                   }
                 if(ask.opt === "Run for your life"){
                  console.log(chalk.red.italic("you loose better luck next time"));
                  process.exit()
                  }
                
                  }
          
          
          
                
        }
          
    while(true);
  
