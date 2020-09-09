import TOCGraph from "../TOCGraph";

let testGraph;
beforeAll(async () => {
    testGraph = new TOCGraph();
})

test("Graph size function", async () => {
    expect(testGraph.size()).toEqual(0);
});

test("Graph add vertex function", async () => {
    expect(testGraph.addVertex("A")).toEqual(true);
});

test("Graph add vertex function fails on duplicate", async () => {
    expect(testGraph.addVertex("A")).toEqual(false);
});

test("Graph add edge function", async () => {
    testGraph.addVertex("B");
    expect(testGraph.addEdge("A", "B")).toEqual(true);
});

test("Graph add edge function fails without vertex being present", async () => {
    expect(testGraph.addEdge("A", "C")).toEqual(false);
});

test("Graph add edge function fails on duplicate", async () => {
    expect(testGraph.addEdge("A", "A")).toEqual(false);
});

test("Graph add edge function fails on add duplicate edge", async () => {
    expect(testGraph.addEdge("A", "B")).toEqual(false);
});

test("Graph get vertices", async () => {
    expect(testGraph.getVertices().size()).toEqual(2);
});

test("Graph get edges", async () => {
    expect(testGraph.getEdges("A").get(0)).toEqual("B");
});

test("Graph remove edge", async () => {
    expect(testGraph.removeEdge("A", "B")).toEqual(true);
});

test("Graph remove edge fails on nonexistent vertex", async () => {
    expect(testGraph.removeEdge("A", "C")).toEqual(false);
});

test("Graph remove edge fails if edge doesn't exist", async () => {
    expect(testGraph.removeEdge("A", "B")).toEqual(false);
});

test("Graph remove vertex with edge", async () => {
    testGraph.addEdge("A", "B");
    expect(testGraph.removeVertex("B")).toEqual(true);
});

test("Graph remove vertex without edge", async () => {
    testGraph.addVertex("C");
    expect(testGraph.removeVertex("C")).toEqual(true);
});

test("Graph remove vertex fails if vertex doesn't exist", async () => {
    expect(testGraph.removeVertex("C")).toEqual(false);
});