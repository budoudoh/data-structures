import TOCLinkedList from "../TOCLinkedList";

let testLinkedList;
beforeAll(async () => {
    testLinkedList = new TOCLinkedList();
})


test("LinkedList isEmpty function", async () => {
    expect(testLinkedList.isEmpty()).toEqual(true);
});

test("LinkedList add function", async () => {
    expect(testLinkedList.add(10)).toEqual(true);
});


test("LinkedList first function", async () => {
    expect(testLinkedList.first().getValue()).toEqual(10);
});

test("LinkedList last function", async () => {
    expect(testLinkedList.last().getValue()).toEqual(10);
});

test("LinkedList add function - add true tail", async () => {
    testLinkedList.add(11);
    expect(testLinkedList.last().getValue()).toEqual(11);
});

test("LinkedList add function - add next tail", async () => {
    testLinkedList.add(12);
    expect(testLinkedList.last().getValue()).toEqual(12);
});

test("LinkedList iterate", async () => {
    testLinkedList.add(13);
    testLinkedList.add(14);
    testLinkedList.add(15);
    let current = testLinkedList.first();
    let value;
    while(current != null){
        value = current.getValue();
        current = current.getNext();
    }
    expect(value).toEqual(15);
});


test("LinkedList remove function", async () => {
    testLinkedList.remove();
    expect(testLinkedList.first().getValue()).toEqual(11);
});