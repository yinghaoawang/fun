let Command = function(execute, constraint) {
    this.execute = execute;
    this.constraint = constraint;
}

define(['command/Command'], () => Command);
