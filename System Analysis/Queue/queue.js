var queue = [];

var add = function( q, x) {
    q[q.length] = x;
}

var remove = function(q) {
    return q.splice(0,1);
}

var isEmpty = function(q) {
    if (q.length == 0) {
        return true;    
    } else {
        return false;
    }
}
