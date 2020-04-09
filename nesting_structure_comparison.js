// https://www.codewars.com/kata/520446778469526ec0000001

Array.prototype.sameStructureAs = function (other) {
  if (this.length === other.length) {
    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i]) && !Array.isArray(other[i]) || !Array.isArray(this[i]) && Array.isArray(other[i])) {
        return false;
      } else if (Array.isArray(this[i]) && Array.isArray(other[i])) {
        return this[i].sameStructureAs(other[i]);
      }
    }
    return true;
  } else return false;
};

 console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ) === true);
 console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ) === true);
 console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ) === false);
 console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ) === false);
 console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ) === true);
 console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ) === false);