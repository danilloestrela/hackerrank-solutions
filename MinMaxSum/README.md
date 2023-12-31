# Min-Max Sum

## Problem Description

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

**Example:** 
`arr = [1,3,5,6,9]`

- The minimum sum is `1 + 3 + 5 + 7 = 16`  
- The maximum sum is `3 + 5 + 7 + 9 = 24` 

The function prints: `16 24`

Complete the` miniMaxSum` function in the editor below.

## Function Description

Complete the` miniMaxSum` function in the editor below. It should return a print (`console.log`) in the following format: `16 24` (minimum maximum sums)

### `miniMaxSum` has the following parameter(s):
- **array arr**: an array of 5 integers

### Print
Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

### Input format

A single line of five space-separated integers.



### Constraints
`1 <= arr[i] <= 10^9`

### Output format
Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

### Sample Input
- `1 2 3 4 5`

### Sample Output
- `10 14`
