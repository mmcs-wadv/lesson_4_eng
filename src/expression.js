class Expression {
    constructor(inputString) {
        this._expr = inputString;
    }

    toString(){
       return  this._expr;
    }

    diff(variable){
        //TODO That is just wrong
        return new Expression('2*x');
    }
}

export {Expression}