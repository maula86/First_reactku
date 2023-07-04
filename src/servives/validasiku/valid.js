export class Validasiku extends Error{
    constructor(message){
        super(message)
        this.name = "Validasiku"
    }
}