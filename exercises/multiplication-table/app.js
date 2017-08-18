let mult = function() {
    let arr =[];
    for(let i = 0; i < 10; i++) {
        arr.push([]);
        for(let j = 1; j < 11; j++) {
            arr[i].push((i + 1) * j);
        }
    }
    return arr;
}
module.exports = mult;