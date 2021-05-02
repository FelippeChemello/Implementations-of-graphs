import Vertex from './vertex'

export default class Edge {
    constructor(public vertexFrom: Vertex, public vertexTo: Vertex, public weight = 1) {}
}
