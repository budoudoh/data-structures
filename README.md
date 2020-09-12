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

## TOCQueue
The TOCQueue class should be used for the breakout problems for instances where a **Queue** should be used.

## TOCHashMap
The TOCHashMap class should be used for the breakout problems for instances where a **Hashmap** should be used. 

## TOCBTS
The TOCBTS class should be used for the breakout problems for instances where a **Binary Search Tree** should be used. 

## TOCGraph
The TOCGraph class should be used for the breakout problems for instances where a **Graph** should be used. 