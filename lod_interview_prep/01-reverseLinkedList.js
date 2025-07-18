"use strict";
/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

*/
Object.defineProperty(exports, "__esModule", { value: true });
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
function reverseList(head) {
    let newArray = [];
    for (let i = head.length; i > 0; i--) {
        newArray.push(head[i]);
    }
    return newArray;
}
;
// linked lists
