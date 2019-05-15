/* N Queens */
let NQueensCommand = function() {
    return new Command(nQueens, RangeConstraint(0, 16));
}

function nQueens(n) {
    let res = [];
    nQueensRec(0, 0, [], 0, n, res);
    return res;
}

function nQueensRec(i, j, curr, currQueenCount, n, res) {
    while (i < n) {
        if (j == 0) curr.push('');
        while (j < n) {
            if (!intersectsQueen(i, j, curr)) {
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
        res.push(curr.map(x => '[' + x + ']'));
    }
}

function intersectsQueen(i, j, curr) {
    for (let ti = 0; ti < i; ++ti) {
        if (curr[ti].charAt(j) == 'Q') return true;
    }
    //console.log(i, j);
    return false;
}
