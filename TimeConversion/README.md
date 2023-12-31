# Time Conversion

## Problem Description

You are given a time in 12-hour AM/PM format, and you need to convert it to military (24-hour) time.

**Note:** 
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Implement a function `timeConversion` that takes the time in 12-hour format as input and returns the equivalent time in military format. 

## Function Description

Complete the `timeConversion` function in the editor below. It should return a new string representing the input time in 24 hour format.

### `timeConversion` has the following parameter(s):
- **string s**: a time in 12 hour format

### Returns
- **string**: the time in 24 hour format

### Input format

A single string  that represents a time in 12-hour clock format (i.e.: `hh:mm:ssAM` or `hh:mm:ssPM`).

### Constraints
- All input times are valid

### Sample Input
- `07:05:45PM`

### Sample Output
- `19:05:45`
