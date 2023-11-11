function isEnoughCapacity(products, containerSize) {

    let totalSize         =   0;
    const valueOfproducts =   Object.values(products);

    for (const size of valueOfproducts){
        totalSize+=size;
    }

    return totalSize<=containerSize;

}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false