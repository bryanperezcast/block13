/* IS TRUTHY speudocode
create a variable for value that holds a string 
then make the if statement run if the condition (check if value is of the type string, and if there is a string inside of it)
then add an else if that checks is the value is false and print "The boolean value false is falsy"
then add an else if that checks if the value is null and print"The null value is falsy"
etc
until the last else make it so that it "prints The empty string is falsy (the only falsy string)" after all the other else ifs dont work
*/
const value = undefined;
if (typeof value === "string" && value) {
    console.log(true);
  }else if (value === false) {
    console.log("The boolean value false is falsy");
  }else if (value === null) {
    console.log("The null value is falsy");
  }else if (value === undefined) {
    console.log("undefined is falsy");
  }else if (value === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
  }else{
    console.log("The empty string is falsy (the only falsy string)");
  }