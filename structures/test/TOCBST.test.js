import TOCBST from "../TOCBST";

let testBST;
beforeAll(async () => {
    testBST = new TOCBST();
})


test("BST isEmpty function", async () => {
    expect(testBST.isEmpty()).toEqual(true);
});

test("BST add function", async () => {
    expect(testBST.add(10)).toEqual(true);
});

test("BST add function fail on duplicate", async () => {
    expect(testBST.add(10)).toEqual(false);
});

test("BST root function", async () => {
    expect(testBST.getRoot().getValue()).toEqual(10);
});

test("BST iterate to find minimum", async () => {
    testBST = new TOCBST();
    let min = 0;
    for(var i = 0; i < 20; i++){
        let current = Math.round(Math.random()*100);
        if(!testBST.add(current))
            continue;
        
        if(i == 0)
            min = current;
        else
            min = Math.min(current, min);
    }
    let current = testBST.getRoot();
    let value;
    while(current != null){
        value = current.getValue();
        current = current.getLeft();
    }
    expect(value).toEqual(min);
});

test("BST iterate to find maximum", async () => {
    testBST = new TOCBST();
    let max = 0;
    for(var i = 0; i < 20; i++){
        let current = Math.round(Math.random()*100);
        if(!testBST.add(current))
            continue;
        
        if(i == 0)
            max = current;
        else
            max = Math.min(current, max);
    }
    let current = testBST.getRoot();
    let value;
    while(current != null){
        value = current.getValue();
        current = current.getLeft();
    }
    expect(value).toEqual(max);
});
