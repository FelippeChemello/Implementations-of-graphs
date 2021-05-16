"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vertex_1 = __importDefault(require("../AdjacencyList/vertex"));
const AdjacencyList_1 = __importDefault(require("../AdjacencyList"));
const edge_1 = __importDefault(require("../AdjacencyList/edge"));
class weightedAdjacencyListGraph extends AdjacencyList_1.default {
    /**
     * Only is considered from and to when is directed is set as True, if not both is from and both is to
     *
     * @param fromVertex
     * @param toVertex
     */
    addEdge(vertexFrom, vertexTo, weight = 1) {
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
        this.edges.push(new edge_1.default(objVertexFrom, objVertexTo, weight));
        console.log(`Creating an edge from ${vertexFrom} to ${vertexTo}`);
    }
}
exports.default = weightedAdjacencyListGraph;
