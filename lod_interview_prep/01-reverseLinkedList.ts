/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let newArray: ListNode = [];
  for (let i = head.length; i > 0; i--) {
    newArray.push(head[i]);
  }
  return newArray;
};

// linked lists