import dijkstra from '../src/class/Dijkstra'
import WeightedAdjacencyMatrix from '../src/class/WeightedAdjacencyMatrix'

const weightedAdjacencyMatrixGraph = new WeightedAdjacencyMatrix(8, false)

weightedAdjacencyMatrixGraph.addEdge(1, 2, 3)
weightedAdjacencyMatrixGraph.addEdge(1, 3, 1)
weightedAdjacencyMatrixGraph.addEdge(1, 5, 8)
weightedAdjacencyMatrixGraph.addEdge(1, 6, 1)
weightedAdjacencyMatrixGraph.addEdge(2, 3, 2)
weightedAdjacencyMatrixGraph.addEdge(2, 7, 1)
weightedAdjacencyMatrixGraph.addEdge(3, 4, 1)
weightedAdjacencyMatrixGraph.addEdge(4, 5, 4)
weightedAdjacencyMatrixGraph.addEdge(5, 6, 6)
weightedAdjacencyMatrixGraph.addEdge(5, 8, 1)
weightedAdjacencyMatrixGraph.addEdge(6, 7, 5)
weightedAdjacencyMatrixGraph.addEdge(7, 8, 1)

console.log('Shortest Path between 2 and 5')
console.log(dijkstra(weightedAdjacencyMatrixGraph, 2, 5))
console.log('Shortest Path between 3 and 6')
console.log(dijkstra(weightedAdjacencyMatrixGraph, 3, 6))
console.log('Shortest Path between 1 and 5')
console.log(dijkstra(weightedAdjacencyMatrixGraph, 1, 5))
console.log('Shortest Path between 1 and 6')
console.log(dijkstra(weightedAdjacencyMatrixGraph, 1, 6))
console.log('Shortest Path between 4 and 7')
console.log(dijkstra(weightedAdjacencyMatrixGraph, 4, 7))
