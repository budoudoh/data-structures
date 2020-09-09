import TOCQueue from "../TOCQueue";

let testQueue;
beforeAll(async () => {
    testQueue = new TOCQueue();
})

test("Queue size function", async () => {
    expect(testQueue.size()).toEqual(0);
});

test("Queue isEmpty function", async () => {
    expect(testQueue.isEmpty()).toEqual(true);
});

test("Queue enqueue function", async () => {
    expect(testQueue.enqueue(10)).toEqual(1);
});

test("Queue peek function", async () => {
    expect(testQueue.peek()).toEqual(10);
});

test("Queue dequeue function", async () => {
    expect(testQueue.dequeue()).toEqual(10);
});
