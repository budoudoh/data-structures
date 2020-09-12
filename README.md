# Data Structures <!-- omit in toc -->

Examples and practice questions from the TOC Foundations Data Structures course.

[![Run on Repl.it](https://repl.it/badge/github/budoudoh/data-structures)](https://repl.it/github/budoudoh/data-structures)

During our breakout problems in this course, you will be using a custom Data Structures library contained in this repository. Click on the repl.it link above to open this repository there for working on these problems.  Please refer to the documentation below for each data structure and it's usage.

- [TOCArray](#tocarray)
- [TOCLinkedList](#toclinkedlist)
- [TOCLinkedListNode](#toclinkedlistnode)
- [TOCStack](#tocstack)
- [TOCQueue](#tocqueue)
- [TOCHashMap](#tochashmap)
- [TOCBTS](#tocbts)
- [TOCBTSNode](#tocbtsnode)
- [TOCGraph](#tocgraph)

## TOCArray
The TOCArray class should be used for the breakout problems for instances where an Array should be used.

```javascript
// Instantiate new array with the size of the array as the constructor parameter
let tocarray = new TOCArray(10);

// Retrieves the size of array
let size = tocarray.size();

// Retrieve item at given index. Returns "undefined" if given index is out of bounds
let first = tocarray.get(0);

// Sets the value of index (parameter 1) to the value in parameter 2.
// Returns true if successful or false if index is out of bounds.
let result = tocarray.set(0, 100);
```

## TOCLinkedList
The TOCLinkedList class should be used for the breakout problems for instances where a **LinkedList** should be used.

```javascript
// Instantiate a new linked list
let toclinkedlist = new TOCLinkedList();

// Adds a value to the linked list a the end of the list.
toclinkedlist.add(value);

// Returns true if the linked list is empty, or false if there is one
// or more items in the list
let empty = toclinkedlist.isEmpty();

// Removes the first item from the linked list
toclinkedlist.remove();

// Returns the first TOCLinkedListNode in the Linked List. Returns null
// if the linked list is empty
let node = toclinkedlist.first();

// Returns the last TOCLinkedListNode in the Linked List. Returns null
// if the linked list is empty
let node = toclinkedlist.last();
```

## TOCLinkedListNode
Each node in the TOCLinkedList is represented by the TOCLinkedListNode class. This class is used to interate through the linked list.

```javascript
let node = toclinkedlist.first();

// Returns the value of the current TOCLinkedListNode
let value = node.getValue();

// Returns the next TOCLinkedListNode in the linked list. Returns null
// if the current node is the last node in the list
let nextNode = node.getNext();
```

## TOCStack
The TOCStack class should be used for the breakout problems for instances where a **Stack** should be used.

```javascript
// Instantiate a new stack
let tocstack = new TOCStack();

// Adds a value to the stack at the front of the stack.
tocstack.push(value);

// Removes the first item from the stack and returns the value
let value = tocstack.pop();

// Views the value of the first item in the stack without removing it
let value = tocstack.peek();

// Returns true if the stack is empty or false if the stack has one or
// more items
let empty = tocstack.isEmpty();

// Returns the count of the number of items in the stack
let count = tocstack.size();
```

## TOCQueue
The TOCQueue class should be used for the breakout problems for instances where a **Queue** should be used.

```javascript
// Instantiate a new queue
let tocqueue = new TOCQueue();

// Adds a value to the queue at the back of the queue.
tocqueue.enqueue(value);

// Removes the first item from the queue and returns the value
let value = tocqueue.dequeue();

// Views the value of the first item in the queue without removing it
let value = tocqueue.peek();

// Returns true if the queue is empty or false if the queue has one or
// more items
let empty = tocqueue.isEmpty();

// Returns the count of the number of items in the queue
let count = tocqueue.size();
```

## TOCHashMap
The TOCHashMap class should be used for the breakout problems for instances where a **Hashmap** should be used.

```javascript
// Instantiate a new hashmap
let tochashmap = new TOCHashMap();

// Adds a value to the hashmap at the corresponding key. Returns the new
// size of the hashmap
let size = tochashmap.add(key, value);

// Gets the item set at the corresponding key
let value = tochashmap.get(key);

// Sets the value at the given key. REturns true if successful, or false
// if this key does not exist in the hashmap
let value = tochashmap.set(key, value);

// Removes the item at key from the hashmap. Returns the new size of
// the hashmap without this key and item
let size = tochashmap.remove(key);

// Returns the count of the number of items in the hashmap
let count = tochashmap.size();
```

## TOCBTS
The TOCBTS class should be used for the breakout problems for instances where a **Binary Search Tree** should be used.

```javascript
// Instantiate a new bts
let tocbts = new TOCBTS();

// Adds a value to the bts. Returns true if the value is added, or false \
// if the value already exists in the BTS
let success = tocbts.add(value);

// Returns true if the BTS is empty, or false if there are one or more values
let empty = tocbts.isEmpty(key);

// Returns the TOCBTSNode at the root of the TOCBTS
let node = tocbts.getRoot();

```

## TOCBTSNode
The TOCBTSNode class represents each node help within a TOCBTS. Use this class to iterate through the TOCBTS.

```javascript
let node = tocbts.getRoot();

// Returns the value of the current TOCBTSNode
let value = node.getValue();

// Returns the left TOCBTSNode of the current node. Returns null
// if the current node is has no left value
let leftNode = node.getLeft();

// Returns the right TOCBTSNode of the current node. Returns null
// if the current node is has no right value
let rightNode = node.getRight();
```

## TOCGraph
The TOCGraph class should be used for the breakout problems for instances where a **Graph** should be used.

```javascript
// Instantiate a new graph
let tocgraph = new TOCGraph();

// Adds a vertex for a value to the graph for a particular value. Returns true if the
// vertex was added successfully, or false if the vertex already exists in the graph
let success = tocgraph.addVertex(vertex);

// Adds an edge to the graph between two corresponding vertices. Returns true if
// successful, or false if either vertex doesn't exist or the edge already exists
let success = tocgraph.addEdge(vertex1, vertex2);

// Removes a vertex from the graph as well as all of its edges to other vertices.
// Returns true if successful, or false if vertex doesn't exist in graph
let success = tocgraph.removeVertex(vertex);

// Removes the edge between two vertices. Returns true if successful, or false if
// the edge doesn't exist
let success = tocgraph.removeEdge(vertex1, vertex2);

// Returns a TOCArray of all vertices within the graph
let vertices = tocgraph.getVertices();

// Returns a TOCArray of all edges for a particular vertex within the graph
let edges = tocgraph.getEdges(vertex);

// Returns the count of all vertices within the graph
let count = tocgraph.getSize();
```

