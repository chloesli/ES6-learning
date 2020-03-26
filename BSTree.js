// Binary Search tree
class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                    } else {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    // If they are equal
                    return null; 
                }

            }
            return searchTree(node);
        } 
    }
    findMin() {
        let current = this.root;
        while(current.left != null) {
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while(current.right != null) {
            current = current.right;
        }
        return current.data;
    }
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                if (current.left !== null) {
                    current = current.left;
                } else {
                    current = current.right;
                }
                
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
    isPresent(data) {
        let current = this.root;
        while(current) {
            if (current.data === data) {
                return true;
            } else if (data < current.data) {
                current = current.left;
                
            } else {
                current = current.right;
                
            } 
        }
        return false;
    }
    printTree() {
        let current = this.root;
        while(current) {
            console.log(hi);
            current = current.left;
        }
    }
    findNumNodes(node) {
        if (node === null) {
            return 0;
        } else {
            return 1 + this.findNumNodes(node.left) + this.findNumNodes(node.right);
        }
    }
    findMaxHeight(node) {
        if (node === null) {
            return -1;
        } else {
            var maxHeight =  this.findMaxHeight(node.left) > this.findMaxHeight(node.right) ? this.findMaxHeight(node.left) : this.findMaxHeight(node.right);
            return 1 + maxHeight;
        }
    }
    findMinHeight(node) {
        if (node === null) {
            return -1;
        } else {
            var maxHeight =  this.findMinHeight(node.left) < this.findMinHeight(node.right) ? this.findMinHeight(node.left) : this.findMinHeight(node.right);
            return 1 + maxHeight;
        }
    }
    isBalanced() {
        return (this.findMinHeight(this.root) >= this.findMaxHeight(this.root) -1)
    }
}

let tree = new BST();
tree.add(57);
tree.add(24);
tree.add(70);
tree.add(78);
tree.add(64);
tree.add(21);
tree.add(27);
console.log(tree.root);
console.log(tree.isPresent(24));
console.log("\nNumber of nodes: ")
console.log(tree.findNumNodes(tree.root));
console.log("\nHeight: ")
console.log(tree.findMaxHeight(tree.root));
console.log(tree.findMinHeight(tree.root));
console.log(tree.isBalanced());