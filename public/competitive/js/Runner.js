let Runner = function() {
    this.command;
}

Runner.prototype.setCommand = function(command) {
    this.command = command;
}

Runner.prototype.execute = function(value) {
    if (this.command.constraint.validate(value)) {
        return this.command.execute(value);
    } else {
        alert(this.command.constraint.errorMessage);
    }
}

define(['Runner'], ()  => Runner);
