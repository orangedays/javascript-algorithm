https://leetcode-cn.com/problems/rotate-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * time: O(n)
 * space: O(1)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null || head.next === null) {
    return head;
  }
  let index = head;
  let len = 1;
  while(index.next != null) {
    index = index.next;
    len++;
  }
  index.next = head;
  for (let i = 1; i < len - k % len; i++) {
    head = head.next;
  }
  const result = head.next;
  head.next = null;
  return result;
};