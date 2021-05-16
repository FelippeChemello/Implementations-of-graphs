"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const edge_1 = __importDefault(require("./edge"));
const vertex_1 = __importDefault(require("./vertex"));
class AdjacencyListGraph {
    constructor() {
        this.edges = [];
        this.vertices = [];
    }
    addEdge(vertexFrom, vertexTo) {
        let objVertexFrom = this.vertices.find(v => v.name === vertexFrom);
        if (!objVertexFrom) {
            objVertexFrom = new vertex_1.default(vertexFrom);
            this.vertices.push(objVertexFrom);
            console.log(`Creating new vertex named ${vertexFrom}`);
        }
        let objVertexTo = this.vertices.find(v => v.name === vertexTo);
        if (!objVertexTo) {
            objVertexTo = new vertex_1.default(vertexTo);
            this.vertices.push(objVertexTo);
            console.log(`Creating new vertex named ${vertexTo}`);
        }
        this.edges.push(new edge_1.default(objVertexFrom, objVertexTo));
        console.log(`Creating an edge from ${vertexFrom} to ${vertexTo}`);
    }
    removeEdge(vertexFrom, vertexTo) {
        const edgeIndex = this.edges.findIndex(edge => edge.vertexFrom.name === vertexFrom && edge.vertexTo.name === vertexTo);
        if (!edgeIndex) {
            console.error(`Edge between ${vertexFrom} and ${vertexTo} doesn't exists`);
            return;
        }
        const removed = this.edges.splice(edgeIndex, 1);
        console.log(`Removing edge from ${removed[0].vertexFrom.name} to ${removed[0].vertexTo.name}`);
    }
    showDegreeFromVertex(vertex, log = true) {
        const degree = this.edges
            .filter(edge => edge.vertexFrom.name === vertex)
            .map(edge => edge.weight)
            .reduce((accumulator, weight) => accumulator + weight, 0);
        if (log)
            console.log(`Degree from vertex ${vertex} is ${degree}`);
        return degree;
    }
    existsEdgeBetweenVertices(vertexFrom, vertexTo) {
        const exists = this.edges.find(edge => edge.vertexFrom.name === vertexFrom && edge.vertexTo.name === vertexTo);
        console.log(`Between ${vertexFrom} and ${vertexTo} ${exists ? 'exists' : "don't exists"} an edge`);
    }
    showAdjacentVertices(vertex) {
        const adjacentVertices = this.edges.filter(edge => edge.vertexFrom.name === vertex).map(edge => edge.vertexTo.name);
        if (adjacentVertices.length) {
            console.log(`Vertex ${vertex} is adjacent to ${adjacentVertices.join(', ')}`);
        }
        else {
            console.log(`Vertex ${vertex} has no adjacent vertices`);
        }
    }
    showAverageDegree() {
        const sumOfDegrees = this.vertices
            .map(vertex => this.showDegreeFromVertex(vertex.name))
            .reduce((accumulator, degree) => accumulator + degree, 0);
        console.log(`Average degree of graph is ${sumOfDegrees / this.vertices.length}`);
    }
    showMinimumDegree() {
        const verticesDegree = this.vertices.map(vertex => [vertex.name, this.showDegreeFromVertex(vertex.name, false)]);
        const minimumDegree = verticesDegree.reduce((accumulator, [_, degree]) => Math.min(accumulator, degree), Infinity);
        const verticesWithMinimalDegree = verticesDegree.filter(([_, degree]) => degree === minimumDegree).map(([name, _]) => name);
        console.log(`Minimum degree from graph is ${minimumDegree}. Vertices that has/have this degree is/are ${verticesWithMinimalDegree.join(', ')}`);
        return minimumDegree;
    }
    showMaximumDegree() {
        const verticesDegree = this.vertices.map(vertex => [vertex.name, this.showDegreeFromVertex(vertex.name, false)]);
        const maximumDegree = verticesDegree.reduce((accumulator, [_, degree]) => Math.max(accumulator, degree), -Infinity);
        const verticesWithMinimalDegree = verticesDegree.filter(([_, degree]) => degree === maximumDegree).map(([name, _]) => name);
        console.log(`Maximum degree from graph is ${maximumDegree}. Vertices that has/have this degree is/are ${verticesWithMinimalDegree.join(', ')}`);
        return maximumDegree;
    }
    showList() {
        console.log();
        console.log('Adjancency List: ');
        console.log(this.vertices
            .map(vertex => [
            vertex.name,
            this.edges
                .filter(edge => edge.vertexFrom.name === vertex.name)
                .map(edge => edge.vertexTo.name)
                .join(', '),
        ])
            .map(value => value.join(' -> '))
            .join('\n'));
        console.log();
    }
}
exports.default = AdjacencyListGraph;
