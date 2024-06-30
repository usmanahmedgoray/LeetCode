<h1>Question</h1>

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  

You may assume that each input would have exactly one solution, and you may not use the same element twice.

  

You can return the answer in any order.

  

  

**Example 1:**

    Input: nums = [2,7,11,15], target = 9
    
    Output: [0,1]
    
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

**Example 2:**

  

    Input: nums = [3,2,4], target = 6
    
    Output: [1,2]

**Example 3:**

  

    Input: nums = [3,3], target = 6
    
    Output: [0,1]

  

**Constraints:**

  

    2 <= nums.length <= 104
    
    -109 <= nums[i] <= 109
    
    -109 <= target <= 109

Only one valid answer exists.

  

Follow-up: Can you come up with an algorithm that is less than <b>O(n2)</b> time complexity?

  
  
  
  

<h1>Answer</h1>

  

In this implementation of the <b>twoSum</b> function, we use an object to keep track of the indices of the numbers we have seen so far as we iterate through the array.

Here's a step-by-step breakdown of how it works:

  

Initialize an empty object PI and this will store the indices of the numbers encountered in the array. The keys are the numbers themselves, and the values are their respective indices.

  

Iterate through the array with forEach method and for each number in the array, we do the following:

  

Calculate the complement number we need to find (i.e., target - num) to add up to the target.

Check if the complement is in PI found in the object, it means we have already encountered a number that, when added to the current number, equals the target. In this case, we store the indices of the complement and the current number in the matched array.

Update PI with the current number and Store the current number and its index in the PI object.

Return the matched array after the loop completes, we return the matched array, which contains the indices of the two numbers that add up to the target.

  

This approach is efficient because it uses a single pass through the array, making the **time complexity O(n)**. Additionally, using an object for storage allows for quick look-up times.

***Here is link of of my leetcode answer***: https://leetcode.com/problems/two-sum/submissions/1304553607
