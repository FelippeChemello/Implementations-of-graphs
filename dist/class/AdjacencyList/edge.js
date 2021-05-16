"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Edge {
    constructor(vertexFrom, vertexTo, weight = 1) {
        this.vertexFrom = vertexFrom;
        this.vertexTo = vertexTo;
        this.weight = weight;
    }
}
exports.default = Edge;
