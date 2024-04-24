import {FenextjsDate} from '../src'

const D =  new FenextjsDate({
    onCallback:(e)=>{
        console.log({e});
        
    }
})

D.addDate(10)

const C = D.onGenerateDateByCalendar()
console.log(C.length);

const M = D.onGenerateDateByMonth()
console.log(M);
