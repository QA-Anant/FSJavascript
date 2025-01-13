// Design a singly linked list with the following methods:
// 1. insertAtHead(data)
// 2. insertAtTail(data)
// 3. deleteAtHead()
// 4. deleteAtTail()
// 5. deleteAtPosition(position)
// 6. insertAtPosition(data, position)
// 7. getHead()
// 8. getTail()
// 9. getAtPosition(position)
// 10. getLength()
// 11. printList()
// 12. reverse()
// 13. reverseRecursive()
// 14. detectLoop()
// 15. removeLoop()
// 16. getMiddle()
// 17. removeDuplicates()
// 18. rotate(k)
// 19. isPalindrome()
// 20. swapNodes()
// 21. mergeTwoLists()
// 22. mergeSort()
// 23. isSorted()
// 24. isCircular()
// 25. makeCircular()
// 26. findIntersection()
// 27. findIntersectionPoint()
// 28. findIntersectionPointHash()
// 29. findIntersectionPointTwoPointer()
// 30. findIntersectionPointLength()
// 31. findIntersectionPointStack()
// 32. findIntersectionPointReverse()
// 33. findIntersectionPointRecursive()
// 34. findIntersectionPointRecursiveHelper()

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.length = 0;
  }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(node){
        // Push 
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

}
// Create a singly linked list
const sll = new SinglyLinkedList(); // empty linked list
sll.push(10); // Insert a node in the linked list

// Insert a node at the head
const n1 = new Node("Anant");


