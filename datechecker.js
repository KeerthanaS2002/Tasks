
let date;
let month;
let monthmid=7;
let year;
function check(date,month,year)
{
    if(month===2)
    {
        if((year % 4 ===0 && year %100 !==0) ||(year%400===0))
                {
                    
                    if(date===29)
                    {
                        console.log("valid leap year date");
                    }
                    else if(date<=28)
                    {
                        console.log("valid leap year date");
                    }
                    else{
                        console.log("invalid leap year");
                    }
                }
    }
    else if((month%2!==0 && month<=7)||(month%2===0 && month>7))
    {
        if(date===31 || date<31)
        {
            console.log("valid");
        }
        else{
            console.log("invalid");
        }
    }
    else if((month%2===0 && month<=7)||(month%2!==0 && month>7))
     {
        if(date<=30)
        {
            console.log("valid");
        }
        else{
            console.log("invalid")
        }
     }
     else{
        console.log("wrong");
     }
                    

}
check(30,5,6);