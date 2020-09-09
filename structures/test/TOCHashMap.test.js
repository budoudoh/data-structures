import TOCHashMap from "../TOCHashMap";

let testmap;
beforeAll(async () => {
    testmap = new TOCHashMap();
})

test("Map size function", async () => {
    expect(testmap.size()).toEqual(0);
});

test("Map add function", async () => {
    expect(testmap.add("test", 1)).toEqual(1);
});

test("Map get function", async () => {
    expect(testmap.get("test")).toEqual(1);
});

test("Map get function key not present", async () => {
    expect(testmap.get("test1")).toEqual(undefined);
});

test("Map set function", async () => {
    expect(testmap.set("test", 2)).toEqual(true);
});

test("Map set function key not present", async () => {
    expect(testmap.set("test1", 2)).toEqual(false);
});

test("Map remove function", async () => {
    expect(testmap.remove("test")).toEqual(0);
});
