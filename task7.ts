//seventh challenge
function swapEnds <T> (array:T[]):T[]{
if (array.length< 2){
return [...array];
}else {
    return  [array[array.length - 1] as T,...array.slice(1,-1), array[0] as T]// as is doing type assertion to help let TS that the first and last index are also of type T
}
}

console.log(swapEnds([1,2,3,4]))
console.log(swapEnds(["apple", "banana", "cherry", "date", "elderberry"]))
console.log (JSON.stringify((swapEnds([{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]))))
