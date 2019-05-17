define(['command/Command', 'constraint/RangeConstraint'], (Command, RangeConstraint) => {
    let SubsetsCommand = function() {
        return new Command(subsets, RangeConstraint(0, 16));
    }

    function subsets(n) {
        let a = [];
        for (i = 0; i < n; ++i) {
            a.push(i + 1);
        }
        let res = [];
        subsetsRec(a, 0, [], res);
        return res.map(x => '[' + x + ']');
    }

    function subsetsRec(a, s, curr, res) {
        res.push(curr);

        if (s == a.length) return;

        while (s < a.length) {
            newCurr = curr.slice();
            newCurr.push(a[s]);
            subsetsRec(a, s + 1, newCurr, res);
            ++s;
        }
    }

    return SubsetsCommand;
});

