class Stack {
    constructor(stack = []) {
        this.stack = stack;
    }

    getStack() {
        return this.stack;
    }
    
    setStack(stack) {
        this.stack = stack;
    }

    push(state) {
        if(Object.keys(state).length != 3) {return;}
        var pos = state["position"].split(" ");
        if(pos[0] >= dimension || pos[0] < 0 || pos[1] >= dimension || pos[1] < 0 || COLOR_LIST[state["nextColor"]] == undefined || COLOR_LIST[state["prevColor"]] == undefined) {return;}
        if(this.isEmpty || !this.isFull) {
            this.stack.push(state);
        }
    }

    pop() {
        if(!this.isEmpty || this.isFull) {
            if(this.stack.length == 1) {
                window.onbeforeunload = null;
            }
            return this.stack.pop();
        }
    }

    peek() {
        if(!this.isEmpty) {
            return this.stack[this.stack.length-1];
        }
    }

    isEmpty() {
        return this.stack.length < 1 ? true : false;
    }

    isFull() {
        return this.stack.length >= 20 ? true : false;
    }

    clearStack() {
        this.stack = [];
    }
}