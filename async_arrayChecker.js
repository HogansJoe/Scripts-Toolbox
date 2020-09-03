const arr1 = ["joe", "sven", "anne"];
const arr2 = ["sven", "joe", "anneeeee"];

/**
 * Check the values for equality but not for an Equal Array posittion.
 * Perfect valuable for Async processes.
 *
 * @param value de waarde van de Array
 */

//Async Fetch then check

function checkEqual(value) {
  if (arr1.indexOf(value) !== -1) {
    return true;
  }
}

//The length of both arrays need to be equal.
if (arr1.length === arr2.length) {
  //Every value needs to be true
  arr2.every((value) => checkEqual(value)); //?
}
