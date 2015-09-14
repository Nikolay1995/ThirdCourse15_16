var stack = [];

var push = function( s, x) {
    q[q.length] = x;
}

var pop = function(s) {
    return q.splice(0,1);
}

var isEmpty = function(s) {
    if (s.length == 0) {
        return true;    
    } else {
        return false;
    }
}
