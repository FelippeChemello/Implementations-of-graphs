import AdjacencyMatrixGraph from './class/AdjacencyMatrix'
import AdjacencyListGraph from './class/AdjacencyList'
import WeightedAdjacencyMatrix from './class/WeightedAdjacencyMatrix'
import WeightedAdjacencyListGraph from './class/WeightedAdjacencyList'
import dijkstra from './class/Dijkstra'

console.log('----------------------------------------------')
console.log('ADJACENCY MATRIX GRAPH:')
console.log('----------------------------------------------\n')

const adjacencyMatrixGraph = new AdjacencyMatrixGraph(8, false)

adjacencyMatrixGraph.addEdge(3, 4)
adjacencyMatrixGraph.addEdge(2, 4)
adjacencyMatrixGraph.addEdge(2, 3)
adjacencyMatrixGraph.addEdge(2, 1)
adjacencyMatrixGraph.addEdge(5, 4)
adjacencyMatrixGraph.addEdge(4, 3)
adjacencyMatrixGraph.addEdge(7, 1)

adjacencyMatrixGraph.showDegreeFromVertex(4)
adjacencyMatrixGraph.showDegreeFromVertex(2)

adjacencyMatrixGraph.existsEdgeBetweenVertices(2, 4)
adjacencyMatrixGraph.existsEdgeBetweenVertices(1, 2)
adjacencyMatrixGraph.existsEdgeBetweenVertices(8, 1)
adjacencyMatrixGraph.existsEdgeBetweenVertices(7, 1)
adjacencyMatrixGraph.existsEdgeBetweenVertices(1, 7)

adjacencyMatrixGraph.showAdjacentVertices(2)
adjacencyMatrixGraph.showAdjacentVertices(4)
adjacencyMatrixGraph.showAdjacentVertices(8)
adjacencyMatrixGraph.showAdjacentVertices(7)
adjacencyMatrixGraph.showAdjacentVertices(3)

adjacencyMatrixGraph.showAverageDegree()
adjacencyMatrixGraph.showMinimumDegree()
adjacencyMatrixGraph.showMaximumDegree()

adjacencyMatrixGraph.showMatrix()

adjacencyMatrixGraph.removeEdge(2, 4)

adjacencyMatrixGraph.showMatrix()

console.log('----------------------------------------------')
console.log('ADJACENCY LIST GRAPH:')
console.log('----------------------------------------------\n')

const adjacencyListGraph = new AdjacencyListGraph()

adjacencyListGraph.addEdge('a', 'b')
adjacencyListGraph.addEdge('c', 'b')
adjacencyListGraph.addEdge('c', 'a')
adjacencyListGraph.addEdge('c', 'f')
adjacencyListGraph.addEdge('d', 'b')
adjacencyListGraph.addEdge('b', 'a')
adjacencyListGraph.addEdge('e', 'f')

adjacencyListGraph.showDegreeFromVertex('c')
adjacencyListGraph.showDegreeFromVertex('f')

adjacencyListGraph.existsEdgeBetweenVertices('b', 'a')
adjacencyListGraph.existsEdgeBetweenVertices('f', 'e')
adjacencyListGraph.existsEdgeBetweenVertices('d', 'a')
adjacencyListGraph.existsEdgeBetweenVertices('c', 'b')
adjacencyListGraph.existsEdgeBetweenVertices('a', 'b')

adjacencyListGraph.showAdjacentVertices('a')
adjacencyListGraph.showAdjacentVertices('b')
adjacencyListGraph.showAdjacentVertices('c')
adjacencyListGraph.showAdjacentVertices('d')
adjacencyListGraph.showAdjacentVertices('e')
adjacencyListGraph.showAdjacentVertices('f')
adjacencyListGraph.showAdjacentVertices('g')

adjacencyListGraph.showAverageDegree()
adjacencyListGraph.showMinimumDegree()
adjacencyListGraph.showMaximumDegree()

adjacencyListGraph.showList()

adjacencyListGraph.removeEdge('c', 'f')

adjacencyListGraph.showList()

console.log('----------------------------------------------')
console.log('WEIGHTED ADJACENCY MATRIX GRAPH:')
console.log('----------------------------------------------\n')

const weightedAdjacencyMatrixGraph = new WeightedAdjacencyMatrix(8, true)

weightedAdjacencyMatrixGraph.addEdge(3, 4, 3)
weightedAdjacencyMatrixGraph.addEdge(2, 4, 1)
weightedAdjacencyMatrixGraph.addEdge(2, 3, 5)
weightedAdjacencyMatrixGraph.addEdge(2, 1)
weightedAdjacencyMatrixGraph.addEdge(5, 4)
weightedAdjacencyMatrixGraph.addEdge(4, 3, 6)
weightedAdjacencyMatrixGraph.addEdge(7, 1, 2)

weightedAdjacencyMatrixGraph.showDegreeFromVertex(4)
weightedAdjacencyMatrixGraph.showDegreeFromVertex(2)

weightedAdjacencyMatrixGraph.existsEdgeBetweenVertices(2, 4)
weightedAdjacencyMatrixGraph.existsEdgeBetweenVertices(1, 2)
weightedAdjacencyMatrixGraph.existsEdgeBetweenVertices(8, 1)
weightedAdjacencyMatrixGraph.existsEdgeBetweenVertices(7, 1)
weightedAdjacencyMatrixGraph.existsEdgeBetweenVertices(1, 7)

weightedAdjacencyMatrixGraph.showAdjacentVertices(2)
weightedAdjacencyMatrixGraph.showAdjacentVertices(4)
weightedAdjacencyMatrixGraph.showAdjacentVertices(8)
weightedAdjacencyMatrixGraph.showAdjacentVertices(7)
weightedAdjacencyMatrixGraph.showAdjacentVertices(3)

weightedAdjacencyMatrixGraph.showAverageDegree()
weightedAdjacencyMatrixGraph.showMinimumDegree()
weightedAdjacencyMatrixGraph.showMaximumDegree()

weightedAdjacencyMatrixGraph.showMatrix()

weightedAdjacencyMatrixGraph.removeEdge(2, 4)

weightedAdjacencyMatrixGraph.showMatrix()

console.log('Shortest Path between 7 and 3')
console.log(dijkstra(weightedAdjacencyMatrixGraph, 7, 1))

console.log('----------------------------------------------')
console.log('WEIGHTED ADJACENCY MATRIX GRAPH:')
console.log('----------------------------------------------\n')

const weightedAdjacencyListGraph = new WeightedAdjacencyListGraph()

weightedAdjacencyListGraph.addEdge('a', 'b', 4)
weightedAdjacencyListGraph.addEdge('c', 'b', 1)
weightedAdjacencyListGraph.addEdge('c', 'a', 6)
weightedAdjacencyListGraph.addEdge('c', 'f', 8)
weightedAdjacencyListGraph.addEdge('d', 'b', 9)
weightedAdjacencyListGraph.addEdge('b', 'a', 5)
weightedAdjacencyListGraph.addEdge('e', 'f', 3)

weightedAdjacencyListGraph.showDegreeFromVertex('c')
weightedAdjacencyListGraph.showDegreeFromVertex('f')

weightedAdjacencyListGraph.existsEdgeBetweenVertices('b', 'a')
weightedAdjacencyListGraph.existsEdgeBetweenVertices('f', 'e')
weightedAdjacencyListGraph.existsEdgeBetweenVertices('d', 'a')
weightedAdjacencyListGraph.existsEdgeBetweenVertices('c', 'b')
weightedAdjacencyListGraph.existsEdgeBetweenVertices('a', 'b')

weightedAdjacencyListGraph.showAdjacentVertices('a')
weightedAdjacencyListGraph.showAdjacentVertices('b')
weightedAdjacencyListGraph.showAdjacentVertices('c')
weightedAdjacencyListGraph.showAdjacentVertices('d')
weightedAdjacencyListGraph.showAdjacentVertices('e')
weightedAdjacencyListGraph.showAdjacentVertices('f')
weightedAdjacencyListGraph.showAdjacentVertices('g')

weightedAdjacencyListGraph.showAverageDegree()
weightedAdjacencyListGraph.showMinimumDegree()
weightedAdjacencyListGraph.showMaximumDegree()

weightedAdjacencyListGraph.showList()

weightedAdjacencyListGraph.removeEdge('c', 'f')

weightedAdjacencyListGraph.showList()
