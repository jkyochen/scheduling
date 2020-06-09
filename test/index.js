import CircularLinkedList from '../src/index.js';

function* firstTask() {
    yield "firstTask1";
    yield "firstTask2";
    yield "firstTask3";
}

function* secondTask() {
    yield "secondTask1";
    yield "secondTask2";
    yield "secondTask3";
    yield "secondTask4";
    yield "secondTask5";
}

function* threeTask() {
    yield "threeTask1";
    yield "threeTask2";
    yield "threeTask3";
    yield "threeTask4";
    yield "threeTask5";
    yield "threeTask6";
    yield "threeTask7";
}

let list = new CircularLinkedList();
list.append(firstTask())
list.append(secondTask())
list.append(threeTask())
for (const value of list) {
    console.log(value)
}
