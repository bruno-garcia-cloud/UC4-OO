import { level } from "./enum";
import { survivor } from "./survivor";

let mySurvivor1 = new survivor()
let mySurvivor2 = new survivor(level.orange)

console.log(mySurvivor1.getLevel())
console.log(mySurvivor2.getLevel())