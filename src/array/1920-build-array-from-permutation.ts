function buildArray(nums: number[]): number[] {
  let ans: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }

  return ans;
}

let nums = [5, 0, 1, 2, 3, 4];

console.log(buildArray(nums)); // [4,5,0,1,2,3]

//* The time complexity of this code is O(n),
//* where n is the length of the input array nums.

//* The for loop runs n times, where n is the length of the array nums.
//* Inside the loop, the operation result.push(nums[nums[i]])
//* takes constant time, i.e., O(1).
//* Therefore, the total time complexity is n * O(1) = O(n).

//* The space complexity of this code is also O(n),
//* because a new array result is created to store the output.
//* The size of this array is equal to the size of the input array nums,
//* so the space complexity is proportional to n.

function buildArray2(nums: number[]): number[] {
  let ans: number[] = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }

  return ans;
}

console.log(buildArray2(nums)); // [4,5,0,1,2,3]
