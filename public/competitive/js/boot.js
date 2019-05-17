requirejs.config({
    'paths': {
        'jquery': '../../jquery-3.4.1.min',
    },
});

let commandNames = [
    'GenParensCommand',
    'SubsetsCommand',
    'NQueensCommand',
];

let commandPaths = commandNames.map(x => 'command/' + x);

define(['jquery', 'Runner', ...commandPaths], ($, Runner, ...commandNames) => {
    $(document).ready(() => {
        let targetCommand = commandNames[0];
        $('#commandTitle').text(targetCommand.name);

        commandNames.forEach(command => {
            $('<button />', {
                text: command.name,
                id: command.name + 'btn',
                click: () => {
                    $('#commandTitle').text(command.name);
                    targetCommand = command;
                },
            }).appendTo('#commands');
        }, this);

        let runner = new Runner();

        /* Testing purposes
        let n = 2;
        runner.setCommand(new targetCommand(n));
        $('#stuff').text(runner.execute(n));
        console.log(runner.execute(n));
        */

        $('#submitBtn').click(() => {
            let n = $('input').val();
            runner.setCommand(new targetCommand(n));
            $('#stuff').text(runner.execute(n));
        });
    });
});

