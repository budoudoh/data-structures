import TOCStack from "../TOCStack";

let teststack;
beforeAll(async () => {
    teststack = new TOCStack();
})

test("Stack size function", async () => {
    expect(teststack.size()).toEqual(0);
});

test("Stack isEmpty function", async () => {
    expect(teststack.isEmpty()).toEqual(true);
});

test("Stack push function", async () => {
    expect(teststack.push(10)).toEqual(true);
});

test("Stack peek function", async () => {
    expect(teststack.peek()).toEqual(10);
});

test("Stack pop function", async () => {
    expect(teststack.pop()).toEqual(10);
});
