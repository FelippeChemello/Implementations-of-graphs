"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdjacencyMatrix_1 = __importDefault(require("../AdjacencyMatrix"));
class WeightedAdjacencyMatrix extends AdjacencyMatrix_1.default {
    constructor(numberOfVertices, isDirected) {
        super(numberOfVertices, isDirected);
    }
    /**
     * Only is considered from and to when is directed is set as True, if not both is from and both is to
     *
     * @param fromVertex
     * @param toVertex
     */
    addEdge(fromVertex, toVertex, weight = 1) {
        this.adjacencyMatrix[fromVertex - 1][toVertex - 1] = weight;
        console.log(`Adding edge from ${fromVertex} to ${toVertex} with ${weight} as weight`);
        if (!this.isDirected) {
            console.log(`Adding edge from ${toVertex} to ${fromVertex} with ${weight} as weight`);
            this.adjacencyMatrix[toVertex - 1][fromVertex - 1] = weight;
        }
    }
}
exports.default = WeightedAdjacencyMatrix;
