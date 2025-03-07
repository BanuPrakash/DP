export default class Visitor {
    visitNumeric(exp) {
        return exp.value;
    }

    visitBinaryExp(exp) {
        switch(exp.operator) {
            case '+':
                return exp.left.accept(this) + exp.right.accept(this) ;
            case '*': 
            return exp.left.accept(this) * exp.right.accept(this) ;
          
        }
    }
}