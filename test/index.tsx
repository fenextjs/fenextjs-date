import {FenextjsDate} from '../src'

const D =  new FenextjsDate()


const C = D.onGenerateDateByCalendar()
console.log(C.length);

const M = D.onGenerateDateByMonth()
console.log(M);
