// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (head === null || head.next === null) {
      return head;
    }
    let count = 0;
    let cur = head;
    while (cur != null && count !=k) {
      cur = cur.next;
      count++;
    }
    if (count === k) {
      cur = reverseKGroup(cur, k);
      while (count-- > 0) {
        let temp = head.next;
        head.next = cur;
        cur = head;
        head = temp;
      }
      head = cur;
    }
    return head;
};