function sumOfDigits(n) {
  return Math.floor(n / 10) + (n % 10);
}

//Check if the given string is a correct time representation of the 24-hour clock.
// For time = "13:58", the output should be
// solution(time) = true;
// For time = "25:51", the output should be
// solution(time) = false;
// For time = "02:76", the output should be
// solution(time) = false.

function isTimeValid(timeStr) {
  // Check if the string matches the pattern of "HH:MM" (hours and minutes separated by a colon)
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!timeRegex.test(timeStr)) {
    return false;
  }

  // Split the string into hours and minutes and convert them to numbers
  const [hours, minutes] = timeStr.split(":").map(Number);

  // Check if the hours and minutes are within the valid range
  if (hours < 0 || hours >= 24 || minutes < 0 || minutes > 59) {
    return false;
  }

  // If we made it this far, the time string is valid
  return true;
}

let time = "13:58"
console.log(isTimeValid(time))

// Given an array of integers a, your task is to calculate the digits that occur the most number of times in the array.
//Return the array of these digits in ascending order.



///

function solution(memory, queries) {
  let counter = 1; // counter for assigning IDs to allocated blocks
  const result = [];

  for (let i = 0; i < queries.length; i++) {
    const [type, value] = queries[i];

    if (type === 0) { // alloc query
      let startIndex = -1;
      let length = 0;

      for (let j = 0; j < memory.length; j++) {
        if (memory[j] === 0) { // found free memory unit
          if (length === 0) { // start of a new potential block
            startIndex = j;
          }
          length++;
          if (length === value) { // found a block of X consecutive free memory units
            const block = Array(value).fill(counter);
            counter++;
            memory.splice(startIndex, value, ...block);
            result.push(startIndex);
            break;
          }
        } else { // memory unit is occupied
          startIndex = -1; // reset potential block start index
          length = 0; // reset potential block length
        }
      }

      if (length < value) { // no block of X consecutive free memory units found
        result.push(-1);
      }
    } else { // erase query
      let length = 0;

      for (let j = 0; j < memory.length; j++) {
        if (memory[j] === value) { // found memory unit with matching ID
          length++;
          memory[j] = 0; // free the memory unit
        }
      }

      if (length === 0) { // no block with matching ID found
        result.push(-1);
      } else {
        result.push(length);
      }
    }
  }

  return result;
}


let memory = [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0]
let queries = [[0, 2], [0, 1], [0, 1], [1, 2], [1, 4], [0, 4]]
console.log(solution(memory,queries))


// // You are given a set of closed line segments, represented as a two-dimensional integer array segments.
// Each segment segments[i] is of the form [l, r], where l is the coordinate of its left endpoint and r is the coordinate of
// its right endpoint. Let's say that the segment [l, r] contains the point x if the
// point is located inside the segment, i.e. l ≤ x ≤ r. Your task is to find the minimal number of
// points that can be placed somewhere on the number line, so that each segment contains at least one
// point.

function minimalPoints(segments) {
  segments.sort((a, b) => a[1] - b[1]);
  let point = segments[0][1];
  let points = 1;
  for (let i = 1; i < segments.length; i++) {
    if (point < segments[i][0]) {
      point = segments[i][1];
      points++;
    }
  }
  return points;
}

