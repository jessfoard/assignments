function factorCount(n) {
    for (let i = 1; i <= n/2; i++) {
        if(n % i === 0) output++;
    }
    if(output === 0) return 1;
    if(output === 1) return 'prime';
}

module.exports = factorCount;