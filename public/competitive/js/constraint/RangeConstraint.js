define('constraint/RangeConstraint', ['constraint/Constraint'], (Constraint) =>
    function RangeConstraint(min, max) {
        let fn = function(n) {
            if (isNaN(n)) return false;
            if (n < min || n > max) return false;
            return true;
        }
        return new Constraint(fn, 'Enter a number between ' + min + ' and ' + max + '.');
    }
);

