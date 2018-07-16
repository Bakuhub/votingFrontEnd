/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
twoSum = function (nums, target) {
  let arr = []
  nums.map((val1, index1) => {
    nums.filter((e, v) => v !== index1).map((val2, index2) => {
      if (val2 === target - val1) {
        arr = [index1, index2].sort()
      }
    })
  })
  return arr
};

twoSum([1, 2, 3], 5)


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

};

/**
 *  Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  console.log(s.split(""))

  function liter(g, string = '', from = 0) {
    arr = g.split()
    arr.filter((a, index) => index >= from).map((v, i) => {
      if (v === arr[i - 1]) {
        console.log(g.substr(from,i-1))
        return liter(g, (g.substr(from, i - 1).length >= string.length) ? g.substr(from, i - 1) : string, i - 1)
      }
    })
    console.log(string)
  }

  return liter(s)
};

lengthOfLongestSubstring("asdfgh")
