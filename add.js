const add = () => {
    const sum = ele.reduce((total,value) => {
        return total+value
    });
    console.log(sum);
}
add(ele = [10,20,30,40,50])