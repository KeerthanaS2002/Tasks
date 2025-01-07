//aysnc 
// async function -simultaneous execution
// async function a() {
//     await db=connectionstring
// }
// fun b()
// {

// }
// func c()
// {

// }

//----------------------------------------------------
// function attandace() {
//     return new Promise((resolve, reject) => {
//      setTimeout(() => {
//         let a=true;
//         if(a)         
//             resolve("attandance true");
//             else
//  reject("attandance false");
     
//      }, 2000);
     
//     })
   
//  }
 
//  function lunch() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let b=true;
//             if(b)         
//                 resolve("l true");
//             else
//              reject("l false");
            
//          }, 2000);
//      })
    
//  }
 
//  function goingtohome() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let c=true;
//             if(c)         
//                 resolve("home true");
//             else
//              reject("home false");
              
//           }, 2000); 
//      })
    
//  }
// async function final(){
//     try {
//         let attandances = await attandace();
//         console.log(attandances);
//         let lun=await lunch();
//         console.log(lun);
//         let home=await goingtohome();
//         console.log(home);
//     } catch (error) {
//         console.error(error);
//     };
// }

// final();

