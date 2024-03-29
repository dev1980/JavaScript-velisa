class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
        this.size = 0;
    }

    add(data){
      var node = new Node(data);

      // to store current node
    var current;
      //if the list is empty add node and make it head.
      if(this.head === null) {
        this.head = node;
       
      }else {
        current = this.head;
       
        // iterate to the end of the list

        while(current.next){
            current = current.next;
        }
        current.next = node;
      }
      this.size++;

}


// insert element at the position index
// of the list
insertAt(element, index){
	if (index < 0 || index > this.size){
		return console.log("Please enter a valid index.");
  }
	else {
		// creates a new node
		var node = new Node(element);
		var curr, prev;

		curr = this.head;

		// add the element to the
		// first index
		if (index == 0) {
			node.next = this.head;
			this.head = node;
		} else {
			curr = this.head;
			var it = 0;

			// iterate over the list to find
			// the position to insert
			while (it < index) {
				it++;
				prev = curr;
				curr = curr.next;
			}

			// adding an element
			node.next = curr;
			prev.next = node;
		}
		this.size++;
	}


}

// Delete from index

// removes an element from the
// specified location
removeFrom(index)
{
	if (index < 0 || index >= this.size)
		return console.log("Please Enter a valid index");
	else {
		var curr, prev, it = 0;
		curr = this.head;
		prev = curr;

		// deleting first element
		if (index === 0) {
			this.head = curr.next;
		} else {
			// iterate over the list to the
			// position to removce an element
			while (it < index) {
				it++;
				prev = curr;
				curr = curr.next;
			}

			// remove the element
			prev.next = curr.next;
		}
		this.size--;

		// return the remove element
		return curr.element;
	}
}

// removes a given element from the
// list

removeElement(element)
{
	var current = this.head;
	var prev = null;

	// iterate over the list
	while (current != null) {
		// comparing element with current
		// element if found then remove the
		// and return true
		if (current.element === element) {
			if (prev == null) {
				this.head = current.next;
			} else {
				prev.next = current.next;
			}
			this.size--;
			return current.element;
		}
		prev = current;
		current = current.next;
	}
	return -1;
}

//helper method
// finds the index of element
indexOf(element)
{
    var count = 0;
    var current = this.head;
 
    // iterate over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }
 
    // not found
    return -1;
}

// checks the list for empty
isEmpty()
{
    return this.size == 0;
}

// gives the size of the list
size_of_list()
{
    console.log(this.size);
}

// prints the list items
printList()
{
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str);
}


}

// In the order to add an element at the end of the list we consider the following : 

// If the list is empty then add an element and it will be head
// If the list is not empty then iterate to the end of the list and add an element at the end of the list
//*********
//insertAt(element, index) – It inserts an element at the given index in a list. 

// In order to add an element at the given index of the list we consider three conditions as follows: 

// if the index is zero we add an element at the front of the list and make it head
// If the index is the last position of the list we append the element at the end of the list
// if the index is between 0 or size – 1 we iterate over to the index and add an element at that index

//**************

// removeElement(element) – This method removes element from the list. It returns the removed element, or if it’s not found it returns -1. 


// creating an object for the
// Linkedlist class


const list = new LinkedList();
list.add(20)
list.add(30)
list.add(40)
list.add(50)
console.log(list)