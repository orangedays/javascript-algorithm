https://leetcode-cn.com/problems/merge-intervals
/**
 * time: O(nlogn)
 * space: O(n) 
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (intervals == null || intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => {
    return a.start - b.start;
  });
  let start = intervals[0].start;
  let end = intervals[0].end;
  let result = [];
  intervals.forEach((item, index) => {
    if (item.start <= end) {
      end = Math.max(end, item.end);
    } else {
      result.push(new Interval(start, end));
      start = item.start;
      end = item.end;
    }
  });
  result.push(new Interval(start, end));
  return result;
};
