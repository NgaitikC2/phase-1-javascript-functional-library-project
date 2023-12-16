// Collection Functions
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
  
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
  
    myEach(collection, function (element) {
      result.push(callback(element));
    });
  
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let startingIndex = 0;
  
    if (acc === undefined) {
      const keys = Object.keys(collection);
  
      if (Array.isArray(collection)) {
        acc = collection[0];
        startingIndex = 1;
      } else {
        acc = collection[keys[0]];
        startingIndex = 1;
      }
    }
  
    for (let i = startingIndex; i < Object.keys(collection).length; i++) {
      const key = Object.keys(collection)[i];
      acc = callback(acc, collection[key], collection);
    }
  
    return acc;
  }
  
  function myFind(collection, predicate) {
    let result;
  
    for (let i = 0; i < collection.length; i++) {
      const element = collection[i];
  
      if (predicate(element)) {
        result = element;
        break; // Stop iterating once a matching element is found
      }
    }
  
    return result;
  }
  
  
  function myFilter(collection, predicate) {
    const result = [];
  
    myEach(collection, function (element) {
      if (predicate(element)) {
        result.push(element);
      }
    });
  
    return result;
  }
  
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Array Functions
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(Math.max(array.length - n, 0));
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => callback(a) - callback(b));
  }
  
  // BONUS: myFlatten
  function myFlatten(array, shallow = false, newArr = []) {
    myEach(array, function (element) {
      if (Array.isArray(element) && !shallow) {
        myFlatten(element, false, newArr);
      } else {
        newArr.push(element);
      }
    });
  
    return newArr;
  }
  
  // Object Functions
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return myMap(myKeys(object), function (key) {
      return object[key];
    });
  }
  