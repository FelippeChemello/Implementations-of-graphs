import fs from 'fs'
import path from 'path'

import './utils/arrayDistinct'

import AdjacencyMatrixGraph from './class/AdjacencyMatrix'

function loadGraph(fileName: string, graphType: 'directed' | 'non-directed') {
    const graphData = fs.readFileSync(path.resolve(__dirname, '..', 'example', fileName), { encoding: 'utf-8' })

    const graphVectors = graphData.split(/,|\n/).distinct()

    const adjacencyMatrix = new AdjacencyMatrixGraph(graphVectors.length, graphType === 'directed')

    graphData
        .split(/\n/)
        .map(edge => edge.split(','))
        .forEach(([vertexFrom, vertexTo]) => adjacencyMatrix.addEdge(Number(vertexFrom), Number(vertexTo)))

    adjacencyMatrix.showMatrix()
}

loadGraph('simpleGraph', 'directed')
