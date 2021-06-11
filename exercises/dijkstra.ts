import dijkstra from '../src/class/Dijkstra'
import WeightedAdjacencyMatrix from '../src/class/WeightedAdjacencyMatrix'

const weightedAdjacencyMatrixGraph = new WeightedAdjacencyMatrix(8, false)

weightedAdjacencyMatrixGraph.addEdge(1, 2, 1)
weightedAdjacencyMatrixGraph.addEdge(1, 3, 3)
weightedAdjacencyMatrixGraph.addEdge(2, 6, 1)
weightedAdjacencyMatrixGraph.addEdge(2, 3, 1)
weightedAdjacencyMatrixGraph.addEdge(3, 4, 2)
weightedAdjacencyMatrixGraph.addEdge(3, 5, 4)
weightedAdjacencyMatrixGraph.addEdge(4, 5, 1)
weightedAdjacencyMatrixGraph.addEdge(4, 6, 2)
weightedAdjacencyMatrixGraph.addEdge(5, 6, 1)

console.log('Shortest Path between 4 and 1')
console.log(dijkstra(weightedAdjacencyMatrixGraph, 4, 1))
