export default class AdjacencyMatrixGraph {
    protected adjacencyMatrix: number[][]

    constructor(protected numberOfVertices: number, protected isDirected: boolean) {
        this.adjacencyMatrix = new Array(this.numberOfVertices).fill(0).map(_ => new Array(this.numberOfVertices).fill(0))
    }

    /**
     * Only is considered from and to when is directed is set as True, if not both is from and both is to
     *
     * @param fromVertex
     * @param toVertex
     */
    public addEdge(fromVertex: number, toVertex: number) {
        this.adjacencyMatrix[fromVertex - 1][toVertex - 1] = 1

        console.log(`Adding edge from ${fromVertex} to ${toVertex}`)

        if (!this.isDirected) {
            console.log(`Adding edge from ${toVertex} to ${fromVertex}`)

            this.adjacencyMatrix[toVertex - 1][fromVertex - 1] = 1
        }
    }

    /**
     * Only is considered from and to when is directed is set as True, if not both is from and both is to
     *
     * @param fromVertex
     * @param toVertex
     */
    public removeEdge(fromVertex: number, toVertex: number) {
        this.adjacencyMatrix[fromVertex - 1][toVertex - 1] = 0

        console.log(`Removing edge from ${fromVertex} to ${toVertex}`)

        if (!this.isDirected) {
            console.log(`Removing edge from ${toVertex} to ${fromVertex}`)

            this.adjacencyMatrix[toVertex - 1][fromVertex - 1] = 0
        }
    }

    public showDegreeFromVertex(vertex: number, log = true) {
        if (!this.isDirected) {
            const degree = this.adjacencyMatrix[vertex - 1].reduce((accumulator, value) => accumulator + value, 0)
            if (log) console.log(`Vertex ${vertex} has ${degree} degree`)

            return degree
        }

        const outDegree = this.adjacencyMatrix[vertex - 1].reduce((accumulator, value) => accumulator + value, 0)
        // const inDegree = this.adjacencyMatrix.map(line => line[vertex - 1]).reduce((accumulator, value) => accumulator + value, 0)

        if (log) console.log(`Vertex ${vertex} has ${outDegree} degree`)

        return outDegree
    }

    public showAverageDegree() {
        const sumOfDegrees = new Array(this.numberOfVertices)
            .fill(0)
            .map((_, index) => this.showDegreeFromVertex(index + 1, false))
            .reduce((accumulator, value) => accumulator + value, 0)

        console.log(`Average degree from graph is ${sumOfDegrees / this.numberOfVertices}`)
    }

    public showMinimumDegree() {
        const verticesDegree = new Array(this.numberOfVertices)
            .fill(0)
            .map((_, index) => this.showDegreeFromVertex(index + 1, false))
            .map((degree, index) => [index, degree])

        const minimumDegree = verticesDegree.reduce((accumulator, [_, degree]) => Math.min(accumulator, degree), Infinity)

        const verticesWithMinimalDegree = verticesDegree.filter(([index, degree]) => degree === minimumDegree).map(([index, _]) => index + 1)

        console.log(
            `Minimum degree from graph is ${minimumDegree}. Vertices that has/have this degree is/are ${verticesWithMinimalDegree.join(', ')}`
        )

        return minimumDegree
    }

    public showMaximumDegree() {
        const verticesDegree = new Array(this.numberOfVertices)
            .fill(0)
            .map((_, index) => this.showDegreeFromVertex(index + 1, false))
            .map((degree, index) => [index, degree])

        const maximumDegree = verticesDegree.reduce((accumulator, [_, degree]) => Math.max(accumulator, degree), -Infinity)

        const verticesWithMaximumDegree = verticesDegree.filter(([index, degree]) => degree === maximumDegree).map(([index, _]) => index + 1)

        console.log(
            `Maximum degree from graph is ${maximumDegree}. Vertices that has/have this degree is/are ${verticesWithMaximumDegree.join(', ')}`
        )

        return maximumDegree
    }

    public existsEdgeBetweenVertices(fromVertex: number, toVertex: number) {
        console.log(
            `Between vertices ${fromVertex} and ${toVertex} ${
                !!this.adjacencyMatrix[fromVertex - 1][toVertex - 1] ? 'exists' : "don't exists"
            } an edge`
        )

        return !!this.adjacencyMatrix[fromVertex - 1][toVertex - 1] ? 'exists' : "don't exists"
    }

    public showAdjacentVertices(fromVertex: number) {
        const adjacentVertices = this.adjacencyMatrix[fromVertex - 1].map((value, index) => (value > 0 ? index + 1 : 0)).filter(value => value > 0)

        if (adjacentVertices.length) {
            console.log(`Vertex ${fromVertex} is adjacent to ${adjacentVertices.join(', ')}`)

            return adjacentVertices
        } else {
            console.log(`Vertex ${fromVertex} don't have adjacent vertices`)
        }
    }

    public showMatrix() {
        console.log()
        console.log('Adjacency Matrix:')
        console.log(
            this.adjacencyMatrix
                .map((_, index) => (index === 0 ? '   ' : '') + (index + 1) + (index + 1 === this.numberOfVertices ? '' : ' | '))
                .join('')
        )

        this.adjacencyMatrix.forEach((line, i) => {
            console.log(
                line.map((value, index) => (index === 0 ? `${i + 1}  ` : '') + value + (index + 1 === this.numberOfVertices ? '' : ' | ')).join('')
            )
        })
        console.log()
    }

    public showAccessibilityMatrix() {
        const accessibilityMatrix = [...this.adjacencyMatrix]

        const vertexQuantity = accessibilityMatrix.length

        for (let k = 0; k < vertexQuantity; k++) {
            for (let i = 0; i < vertexQuantity; i++) {
                for (let j = 0; j < vertexQuantity; j++) {
                    accessibilityMatrix[i][j] = accessibilityMatrix[i][j] || (accessibilityMatrix[i][k] && accessibilityMatrix[k][j])
                }
            }
        }

        console.log()
        console.log("Warshall's Accessibility Matrix:")
        console.log(
            accessibilityMatrix
                .map((_, index) => (index === 0 ? '   ' : '') + (index + 1) + (index + 1 === this.numberOfVertices ? '' : ' | '))
                .join('')
        )

        accessibilityMatrix.forEach((line, i) => {
            console.log(
                line.map((value, index) => (index === 0 ? `${i + 1}  ` : '') + value + (index + 1 === this.numberOfVertices ? '' : ' | ')).join('')
            )
        })
        console.log()
    }
}
