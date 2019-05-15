/* Generate Parenthesis */
let GenParensCommand = function() {
    return new Command(genParens, RangeConstraint(1, 12));
}

function genParens(n) {
    let res = [];
    recGenParens(res, "", 0, 0, n);
    return res.sort();
}

function recGenParens(res, curr, nLeft, nRight, n) {
    let pos = nLeft + nRight;
    if (pos == n * 2) {
        res.push(curr.toString());
        return;
    }
    if (nLeft < n) {
        recGenParens(res, curr + '(', nLeft + 1, nRight, n);
    }
    if (nRight < nLeft) {
        recGenParens(res, curr + ')', nLeft, nRight + 1, n);
    }
}
