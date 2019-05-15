requirejs.config({
    'paths': {
        'jquery': '../../jquery-3.4.1.min',
    },
});

define(['jquery', 'Runner', 'command/NQueensCommand'], ($, Runner, TargetCommand) => {
    $(document).ready(() => {
        let runner = new Runner();

        let n = 2;
        runner.setCommand(new TargetCommand(n));
        $('#stuff').text(runner.execute(n));
        console.log(runner.execute(n));

        $('#button').click(() => {
            let n = $('input').val();
            runner.setCommand(new TargetCommand(n));
            $('#stuff').text(runner.execute(n));
        });
    });
});
