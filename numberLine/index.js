/*pseudocode
        first we want to find the sum of num1 and num2
        second we check if sum is greater than 100, if so print sum + " is greater than 100";
        then check if sum is greater than 0, if so print sum + " is larger than 0";
        then check if sum is = to 0, if so print sum + " is equal to 0";
        then check if sum is less than -1000, if so print sum + " is less than -1000";
        then check if sum is a negative number, if so print sum + " is a negative number";
        */
        let num1 = 0;
        let num2 = -5;
        let sum = num1 + num2;
        if (sum > 100){
         console.log(sum + " is greater than 100");
        }
        else if (sum > 0){
         console.log(sum + " is larger than 0");
        }
        else if (sum === 0){
         console.log(sum + " is equal to 0");
        }
        else if (sum < -1000){
         console.log(sum + " is less than -1000");
        }
        else if (sum < 0){
         console.log(sum + " is a negative number");
        }