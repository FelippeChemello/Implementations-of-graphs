import WeightedAdjacencyMatrix from '../WeightedAdjacencyMatrix'

//Calculates shortest path between two nodes
//Matrix must be simple and connected with positive weights
export default function dijkstra(weightedAdjacencyMatrix: WeightedAdjacencyMatrix, fromNode: number, toNode: number) {
    let distances: number[] = []

    distances[toNode] = Infinity
    distances = Object.assign(distances, weightedAdjacencyMatrix[fromNode])

    let parents = { fromNode: null }
    for (let child in weightedAdjacencyMatrix[fromNode]) {
        parents[child] = fromNode
    }

    let visited: number[] = []

    let node = shortestDistanceNode(distances, visited)
    while (node) {
        const distance = distances[node]
        const children = weightedAdjacencyMatrix.getMatrix()[node]
        console.log(weightedAdjacencyMatrix.getMatrix(), node)

        children.forEach(child => {
            if (child !== fromNode) {
                const newDistance = distance + children[child]

                if (!distances[child] || distances[child] > newDistance) {
                    distances[child] = newDistance
                    parents[child] = node
                }
            }
        })

        visited.push(node)

        node = shortestDistanceNode(distances, visited)
    }

    const shortestPath = [toNode]
    let parent = parents[toNode]
    while (parent) {
        shortestPath.push(parent)
        parent = parents[parent]
    }

    shortestPath.reverse()

    return {
        distance: distances[toNode],
        path: shortestPath,
    }
}

function shortestDistanceNode(distances: number[], visited: number[]) {
    let shortest: number | undefined

    distances.forEach((weight, i) => {
        let currentIsShortest = shortest === undefined || weight < distances[shortest]

        if (currentIsShortest && !visited.includes(i)) {
            shortest = i
        }
    })

    console.log(shortest)

    return shortest
}
