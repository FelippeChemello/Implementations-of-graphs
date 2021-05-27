import AdjacencyMatrixGraph from '../AdjacencyMatrix'

export default class WeightedAdjacencyMatrix extends AdjacencyMatrixGraph {
    constructor(numberOfVertices: number, isDirected: boolean) {
        super(numberOfVertices, isDirected)
    }

    /**
     * Only is considered from and to when is directed is set as True, if not both is from and both is to
     *
     * @param fromVertex
     * @param toVertex
     */
    public addEdge(fromVertex: number, toVertex: number, weight = 1) {
        this.adjacencyMatrix[fromVertex - 1][toVertex - 1] = weight

        console.log(`Adding edge from ${fromVertex} to ${toVertex} with ${weight} as weight`)

        if (!this.isDirected) {
            console.log(`Adding edge from ${toVertex} to ${fromVertex} with ${weight} as weight`)

            this.adjacencyMatrix[toVertex - 1][fromVertex - 1] = weight
        }
    }

    public getWeight(fromNode: number, toNode: number) {
        return this.adjacencyMatrix[fromNode][toNode]
    }
}
