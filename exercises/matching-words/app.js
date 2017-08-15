let matchingWords = function(str) {
    let graph = {
        
    };
    let output = [};
    let arr = str.split(" ")
    for(let i = 0; i < arr.lenght; i++) {
        if(!graph[arr[i]]){
            graph[arr[i]] = arr[i];
        } else if(graph[arr[i]]) {
            
        }
    }
    for (let word in graph){
        output.push(word);
    }
    return output;
}

module.exports = matchingWords;