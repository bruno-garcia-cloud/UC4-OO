import { level } from "./enum";

export class survivor {
    protected level : level;

    constructor(levelConst:level = level.blue){
        this.level = levelConst;
    }
    getLevel():level{return this.level}
}