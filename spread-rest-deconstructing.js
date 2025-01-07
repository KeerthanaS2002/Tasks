// //spread  operator(...)
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let c=[...a,...b];
// console.log(c);

//-----------------------
//spread  operator(...)
// let d = [1,2,3,4,5]
// let e = [...d]
// e[2]=10;
// console.log(e)
//-----------------------
// //spread  operator(...)
// let d = [1,2,3,4,5]
// let e = d
// e[2]=10;
// console.log(e)
//---------------------------------------------
// let a=10;
// function x()
// {
//     a=20;
//     console.log(a);
// }
// x();
// console.log(a);
//20 20  because let is delacred globally and noot in scope hence it is changing to 20
//----------------------
// var a=10;
// function x()
// {
//     a=20;
//     console.log(a);
// }
// x();
// console.log(a);
//20 20
//------------------------------------
// let a=10;
// let b=a;
// a=20;
// console.log(a);
// console.log(b);
//20 10
// a      b
//10      10
//20      10
//-------------------------------------------
//spread  operator(...)(spread the values)
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let c=[...a,...b];
// console.log(c);
// function sp(values)
// {
//     console.log(values)
// }sp(...c)

//rest operator(combine the values)
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let c=[...a,...b];

// function sp(b,c,d,...values)
// {
//     // console.log(values)
//     //console.log(b,c,d)
// }sp(1,2,3,4,5,6,7,55)
//-----------
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let c=[...a,...b];

// // function sp(...values)
// // {
// //      console.log(values)
// //     //console.log(b,c,d)
// // }sp(1,2,3,4,5,6,7,55)

// function sp(...values,x,y,)
// {
//      console.log(values)
//     //console.log(b,c,d)
// }sp(1,2,3,4,5,6,7,55)
//------------------------------------------------------------
//spread object
    // let s1={
    //     name:"avi",
    //     age:20,
    //     isStudent : true
    // }
    // let b = {...s1};
    // console.log(s1);
    // console.log(b);
//--------------------------------------------------------------------------
// //destructuring operator
// let a=[1,2,3,4,5];
// // let b =a[0];
// // let c=a[1];
// // let d=a[2];
// // let e=a[4];
// let [b,c,d,e,f]=a;
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
//------------------------------------------
//rest operator
// let a=[1,2,3,4,5,6];
// let [b,c,...d]=a;
// console.log(b);
// console.log(c); 
// console.log(d);
//------------------------------------------
// // destructuring object
// let s1={
//         name:"avi",
//         age:20,
//         isStudent : true
//     }
// // let {name,...y}=s1;
// // console.log(name);
// // console.log(y);
//  let {name,age,isStudent}=s1;
// console.log(name);
// console.log(age);
// console.log(isStudent);
//------------------------------------
