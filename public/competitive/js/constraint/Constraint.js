define('constraint/Constraint', () =>
    function Constraint(validate, errorMessage) {
        this.validate = validate;
        this.errorMessage = errorMessage;
    }
);

