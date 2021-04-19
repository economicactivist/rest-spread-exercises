//filter out odd numbers 

const filterOutOdds = (...nums) => nums.filter(num=>  num % 2 === 0);
  

console.log(filterOutOdds(1,2,3,4,5,6,7))

const findMin = (...nums) => nums.reduce((acc, nextNum) => {
    return acc < nextNum? acc : nextNum
})

console.log(findMin(5,6,7,99,1,32,9))

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

console.log(mergeObjects({a:1, b:2}, {c:3, d:4})) // {a:1, b:2, c:3, d:4}

const doubleAndReturnArgs = (arr, ...nums) => {
    const doubledNums =  nums.map(e=>e*2)
    return [...arr,...doubledNums]
}
console.log(doubleAndReturnArgs([1,2,3],4,4)) // [1,2,3,8,8]

  
/*--------------------Part Two---------------------------------*/

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let idxToDelete = Math.round(Math.random()*(items.length-1))
    const newDeletedElementArray = [...items]
    newDeletedElementArray.splice(idxToDelete,1)
    return newDeletedElementArray
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1,...array2]
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val)  => {
    return {...obj, [key]:val}

}




/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newRemovedProperty = {...obj}
    delete newRemovedProperty[key]
    return newRemovedProperty

}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2})


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    return key in obj? {...obj, [key]: val*3} : console.error('key not found')
}
