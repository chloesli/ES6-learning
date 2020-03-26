// Breadth-first-search
var DFSGraph = [
    [0, 1, 0, 0, 1, 1],
    [1, 0, 1, 0, 0, 1],
    [0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0]
]

var BFSGraph = [
    [0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 0],
    [1, 1, 0, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1]
]

console.log(BFSGraph);
// Graph, src, destination
let bvisited = [];
function bfs(graph, src, dest) {
    bvisited = [];
    for (let i = 0; i < graph.length; i++) {
        bvisited[i] = -1;
    } 
    let found = false;
    bvisited[src] = src;
    // Push and shift
    const queue = [];
    queue.push(src);
    var v;
    while (!found && queue.length > 0) {
        v = queue.shift();
        if (v == dest) {
            found = true;
            break;
        } else {
            for (let w = 0; w < graph.length; w++) {
                if (bvisited[w] !== -1 || graph[v][w] !== 1) {
                    continue;
                }
                bvisited[w] = v;
                queue.push(w);
            }
        }
    }
    if (found) {
        printPath(bvisited, src, dest);
    }
}

let dvisited = [];
function dfs(graph, src, dest) {
    dvisited = [];
    for (let i = 0; i < graph.length; i++) {
        dvisited.push(-1);
    } 
    let found = false;
    // Use LIFO
    // .push & .pop methods
    let stack = [];
    dvisited[src] = src;
    stack.push(src);
    while(!found && stack.length > 0) {
        let v = stack.pop();
        if (v === dest) {
            found = true;
            break;
        } else {
            for (let w = 0; w < graph.length; w++) {
                if (dvisited[w] == -1 && graph[v][w] >= 1) {
                    dvisited[w] = v;
                    stack.push(w);
                }
            }
        }
    }
    if (found) {
        printPath(dvisited, src, dest);
    }
}

function printPath(visited, src, dest) {
    var path = [];
    var current = dest; 
    path.push(dest);
    while (current !== 0) {
        current = visited[current];
        path.push(current);
    }
    console.log(path);
}
console.log("\nBFS");
bfs(BFSGraph, 0, 6);
console.table(bvisited);
console.log("\nDFS");
dfs(BFSGraph, 0, 6);
console.table(dvisited);

console.log("\nBFS");
bfs(DFSGraph, 0, 2);
console.table(bvisited);
console.log("\nDFS");
dfs(DFSGraph, 0, 2);
console.table(dvisited);
