define('command/NQueensCommand', ['command/Command', 'constraint/RangeConstraint'], (Command, RangeConstraint) => {
    /* N Queens */
    let NQueensCommand = function() {
        return new Command(nQueens, RangeConstraint(0, 10));
    }

    function nQueens(n) {
        let res = [];
        nQueensRec(0, 0, [], 0, n, res);
        return res.map(x => '[' + x + ']');
    }

    function nQueensRec(i, j, curr, currQueenCount, n, res) {
        while (i < n) {
            if (j == 0) curr.push('');
            while (j < n) {
                if (!intersectsQueen(i, j, curr, n)) {
                    let newCurr = curr.slice();
                    newCurr[i] += 'Q';
                    if (j == n - 1) {
                        nQueensRec(i + 1, 0, newCurr, currQueenCount + 1, n, res);
                    } else {
                        nQueensRec(i, j + 1, newCurr, currQueenCount + 1, n, res);
                    }
                }
                curr[i] += '.';
                ++j;
            }
            j = 0;
            ++i;
        }
        if (currQueenCount == n) {
            // res.push(curr.reduce((acc, e) => acc + '\n' + e));
            res.push(curr);
        }
    }

    function intersectsQueen(i, j, curr, n) {
        for (let ti = 0; ti < i; ++ti) {
            if (curr[ti].charAt(j) == 'Q') return true;
        }
        for (let tj = 0; tj < j; ++tj) {
            if (curr[i].charAt(tj) == 'Q') return true;
        }
        for (let ti = i - 1, tj = j + 1; ti >= 0 && tj < n; --ti, ++tj) {
            if (curr[ti].charAt(tj) == 'Q') return true;
        }
        for (let ti = i - 1, tj = j - 1; ti >= 0 && tj >= 0; --ti, --tj) {
            if (curr[ti].charAt(tj) == 'Q') return true;
        }
        return false;
    }

    return NQueensCommand;
});


