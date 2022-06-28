//Problem 7.1 : Reverse the Linked list

class newSSLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head = null;

function createLL(arr) {
  head =new  newSSLNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new newSSLNode(arr[i]);
    curr = curr.next
  }
  return head;
}

function traverseSLL(head) {
  let curr = head;
  while (curr != null) {
    console.log(curr.value)
    curr = curr.next;
  }
}

function reverseLL(head) {
  let curr = head;
  let before=null,after= null;

  while(curr.next!=null){
    after = curr.next;
    curr.next = before;
    before = curr;
    curr = after;
  }
  curr.next = before;
  head = curr;
  return head;
}



createLL([1,2,3,4,5])
console.log("----Traversing---")
traverseSLL(head)
//Reversing
console.log("----Reversing---")
traverseSLL(reverseLL(head))