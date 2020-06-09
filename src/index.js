class Node {
    constructor(element) {
        this.element = element
        this.prev = null
        this.next = null
    }
}

export default class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.presentNode = null;
    }

    append(newElement) {
        let newNode = new Node(newElement);
        if (this.head === null) {
            this.head = newNode;
            this.head.next = this.head.prev = this.head;
            this.tail = this.presentNode = this.head;
        } else {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    _delete(node) {
        if(node !== node.next) {
            let beforeNode = node.prev;
            beforeNode.next = node.next;
            node.next.prev = beforeNode;    
        } else {
            this.head = this.presentNode = null;
        }
    }
    
    [Symbol.iterator]() { return this; }

    next() {
        if (this.presentNode === null) {
            return { done: true, value: undefined };
        }

        let n = this.presentNode;
        this.presentNode = this.presentNode.next;
        let rs = n.element.next();
        if (rs.done) {
            this._delete(n);
            return this.next();
        } else {
            return { done: false, value: rs.value };
        }
    }
}
