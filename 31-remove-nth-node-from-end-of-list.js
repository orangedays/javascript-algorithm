// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0);
  let slow = dummy;
  let fast = dummy;
  dummy.next = head;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast != null) {
    fast = fast.next;
    slow  = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};