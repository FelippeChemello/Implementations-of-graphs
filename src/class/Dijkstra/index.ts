import WeightedAdjacencyMatrix from '../WeightedAdjacencyMatrix'

//Calculates shortest path between two nodes
//Matrix must be simple and connected with positive weights
export default function dijkstra(weightedAdjacencyMatrix: WeightedAdjacencyMatrix, fromNode: number, toNode: number) {
    let distances = {}
    distances[toNode - 1] = Infinity
    distances = Object.assign(distances, weightedAdjacencyMatrix.getMatrix()[fromNode - 1])

    let parents = {}
    new Array(weightedAdjacencyMatrix.getNumberOfVertices()).fill(0).forEach((_, i) => (i !== fromNode - 1 ? (parents[i] = fromNode - 1) : null))

    const visited: number[] = []

    let node = nearestNode(distances, visited)

    while (typeof node !== 'undefined') {
        let distance = distances[node]
        let children = {}
        weightedAdjacencyMatrix.showAdjacentVertices(node + 1, false).forEach(vertex => {
            if (typeof node === 'undefined') {
                console.error('Node is undefined')
                return
            }

            children[vertex - 1] = weightedAdjacencyMatrix.getWeight(node, vertex - 1)
        })

        Object.entries(children).forEach(([childNode, childWeight]) => {
            if (Number(childNode) === fromNode) {
                console.log("I won't check start Node")
                return
            } else {
                let newDistance = distance + childWeight

                if (!distances[childNode] || distances[childNode] > newDistance) {
                    distances[childNode] = newDistance

                    parents[childNode] = node
                }
            }
        })

        visited.push(node)

        node = nearestNode(distances, visited)
    }

    let shortestPath = [toNode]
    let parent = parents[toNode - 1]
    while (typeof parent !== 'undefined') {
        shortestPath.push(parent + 1)
        parent = parents[parent]
    }
    shortestPath.reverse()

    return {
        distance: distances[toNode - 1],
        path: shortestPath,
    }
}

function nearestNode(distances: { [node: number]: number }, visited: number[]) {
    let shortest: number | undefined

    Object.entries(distances).forEach(([node, weight]) => {
        let currentIsShortest = shortest === undefined || weight < distances[shortest]

        if (currentIsShortest && !visited.includes(Number(node))) {
            shortest = Number(node)
        }
    })

    return shortest
}
