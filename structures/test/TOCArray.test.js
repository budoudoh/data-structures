import TOCArray from "../TOCArray";

let testarray;
beforeAll(async () => {
    testarray = new TOCArray(10);
})

test("Array size function", async () => {
    expect(testarray.size()).toEqual(10);
});

test("Array get function", async () => {
    expect(testarray.get(1)).toEqual(null);
});
test("Array get function index out of bounds", async () => {
    expect(testarray.get(11)).toEqual(undefined);
});

test("Array set function", async () => {
    expect(testarray.set(0, 1)).toEqual(true);
});

test("Array set function index out of bounds", async () => {
    expect(testarray.set(11, 1)).toEqual(false);
});
