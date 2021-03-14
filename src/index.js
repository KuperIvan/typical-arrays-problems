exports.min = function min(array) {
  if (array !== undefined) {
    return array.reduce((pivot, item) => (pivot < item ? pivot : item), 0);
  }
  return 0;
};

exports.max = function max(array) {
  if (array !== undefined) {
    return array.reduce((pivot, item) => (pivot > item ? pivot : item), 0);
  }
  return 0;
};

exports.avg = function avg(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  return array.reduce((prev, item) => prev + item, 0) / array.length;
};
