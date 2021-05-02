import Vertex from '../AdjacencyList/vertex'
import AdjacencyListGraph from '../AdjacencyList'
import Edge from '../AdjacencyList/edge'

export default class weightedAdjacencyListGraph extends AdjacencyListGraph {
    /**
     * Only is considered from and to when is directed is set as True, if not both is from and both is to
     *
     * @param fromVertex
     * @param toVertex
     */
    public addEdge(vertexFrom: string, vertexTo: string, weight = 1) {
        let objVertexFrom = this.vertices.find(v => v.name === vertexFrom)
        if (!objVertexFrom) {
            objVertexFrom = new Vertex(vertexFrom)
            this.vertices.push(objVertexFrom)

            console.log(`Creating new vertex named ${vertexFrom}`)
        }

        let objVertexTo = this.vertices.find(v => v.name === vertexTo)
        if (!objVertexTo) {
            objVertexTo = new Vertex(vertexTo)
            this.vertices.push(objVertexTo)

            console.log(`Creating new vertex named ${vertexTo}`)
        }

        this.edges.push(new Edge(objVertexFrom, objVertexTo, weight))

        console.log(`Creating an edge from ${vertexFrom} to ${vertexTo}`)
    }
}
