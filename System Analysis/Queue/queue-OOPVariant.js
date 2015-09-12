function Queue(){
    var queue = [];
    
    //---add(q,x)---
    this.add = function(x) {
        queue[queue.length] = x;
    }
    
    //---remove(q)---
    this.remove = function() {
        queue.splice(0,1);
    }
    
    //---isEmpty(q)---
    this.isEmpty = function() {
        if (queue.length > 0) {
            return true;
        } else {
            return false;    
        }
    }
    
}