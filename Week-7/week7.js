//Problem 7.1 : Reverse the Linked list

class newSSLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}



function createLL(arr, head) {
  head = new newSSLNode(arr[0]);
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
  let before = null, after = null;

  while (curr.next != null) {
    after = curr.next;
    curr.next = before;
    before = curr;
    curr = after;
  }
  curr.next = before;
  head = curr;
  return head;
}



let head = createLL([1, 2, 3, 4, 5])
console.log("----Traversing---")
traverseSLL(head)
//Reversing
console.log("----Reversing---")
traverseSLL(reverseLL(head))


//Problem 7.2: Rotate Linked List

function rotateLLKNodes(head, k) {
  let curr = head;
  let n = 1;
  while (curr.next != null) {
    n++;
    curr = curr.next;
  }
  k %= n;
  if (k === 0) return head;

  let curr2 = head;
  let after = null;
  while (--k) {
    curr2 = curr2.next;
  }
  after = curr2.next;
  curr2.next = null;
  curr2 = after
  while (curr2.next != null) {
    curr2 = curr2.next;
  }
  curr2.next = head;
  head = after;
  return head;

}

let head2 = createLL([1, 2, 3, 4, 5])
console.log("----Rotating---")
traverseSLL(rotateLLKNodes(head2, 6));


// Problem 7.3: Detect loop in a linked list

function createCircularLLAtK(arr, k) {
  let head = new newSSLNode(arr[0])
  let curr = head;
  let circularPoint = null
  for (let i = 1; i < arr.length; i++) {
    curr.next = new newSSLNode(arr[i])
    if (k === i) {
      circularPoint = curr
    }
    curr = curr.next;
  }
  curr.next = circularPoint;
  return head;
}

function detectLoopLL(head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow.value === fast.value) {
      return true;
    }
  }
  return false;
}

let head3 = createCircularLLAtK([1, 2, 3, 4, 5], 3)
console.log("----CIRCULAR LL---")
console.log(detectLoopLL(head3))


// Problem 7.4: Parenthesis Checker
function parenthesisChecker(arr) {
  let stack = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '{' || arr[i] === '(' || arr[i] === '[') {
      stack.push(arr[i])
    }
    else if (arr[i] === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    }
    else if (arr[i] === '}') {
      if (stack.pop() !== '{') {
        return false;
      }
    }
    else if (arr[i] === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    }
  }

  return stack.length > 0 ? false : true;
}
console.log("----PARENTHESIS CHECKER---")
console.log(parenthesisChecker(["{", "}", "(", "{", "}", ")", "[", "]"]))

// Problem 7.6: Implement a Queue using 2 stack

let stack1 = [];
let stack2 = [];

function enqueue(val){
  stack1.push(val)
}

function dequeue(){
  while(stack1.length){
    stack2.push(stack1.pop())
  }
  stack2.pop();
  while(stack2.length){
    stack1.push(stack2.pop())
  }
}


enqueue('1');
enqueue('2');
enqueue('3');
dequeue();
console.log('---QUEUE FROM STACKS----')
console.log(stack1)