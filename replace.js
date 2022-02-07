const replace = (arr) => {
    arr.splice(2,1,'zebra')
    console.log("the replaced array is:",`${arr}`);
}
arr = ['dog','cat','elephant','lion','tiger'];
replace(arr)