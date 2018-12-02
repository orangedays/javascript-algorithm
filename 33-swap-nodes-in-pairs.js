// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
/**
 * time: O(n);
 * space: O(1);
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let dummy = new ListNode(0);
  dummy.next = head;
  let l1 = dummy;
  let l2 = head;
  while (l2 != null && l2.next != null) {
    let nextStart = l2.next.next;
    l1.next = l2.next;
    l2.next.next = l2;
    l2.next = nextStart;
    l1 = l2;
    l2 = l2.next;
  }
  return dummy.next;
};