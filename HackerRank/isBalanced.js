function isBalanced(expr) {
    let stack = [];
    let pairs = { ')': '(', '}': '{', ']': '[' };

    for (let char of expr) {
        if (Object.values(pairs).includes(char)) {
            stack.push(char);
        } else if (Object.keys(pairs).includes(char)) {
            if (stack.pop() !== pairs[char]) return false;
        }
    }
    return stack.length === 0;
}

console.log(isBalanced("{[()]}")); // Output: true
console.log(isBalanced("{[(])}")); // Output: false