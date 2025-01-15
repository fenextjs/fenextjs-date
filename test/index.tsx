import {FenextjsDate} from '../src'

const D =  new FenextjsDate({
    onCallback:(e)=>{
        console.log({e});
        
    }
})

D.addDate(10)

// const C = D.onGenerateDateByCalendar()
// console.log(C.length);

// const M = D.onGenerateDateByMonth()
// console.log(M);


D.addDate(10)
// const C = D.onCompareDate({
//     date:new Date("10-10-2000"),
//     dateCompare:new Date("10-10-2000"),
//     compareSymbol:{
//         "!=":true,
//         "<":true,
//         "<=":true,
//         "==":true,
//         ">":true,
//         ">=":true
//     },
//     compare:{
//         Date:true,
//         FullYear:true,
//         Month:true
//     }
// })


const C = D.onGetDifDate({dateCompare:new Date(2000,1,1)})

console.log(C);
