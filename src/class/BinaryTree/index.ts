import util from 'util'

interface TreeNode {
    value?: number

    left?: TreeNode
    right?: TreeNode
}

const array = [34, 84, 15, 0, -1, 2, 99, 79, 9, 88, 89, 18, 31, 39, 100, 101]

const root = {} as TreeNode

function insert(value: number) {
    if (!root.value) {
        root.value = value
    } else {
        let current: TreeNode | undefined = root
        let parent: TreeNode | undefined = undefined

        while (1) {
            parent = current

            if (parent?.value === undefined) {
                return
            }

            if (value < parent.value) {
                if (!current.left) {
                    current.left = { value }
                    return
                }

                current = current?.left
            } else {
                if (!current?.right) {
                    current.right = { value }
                    return
                }

                current = current.right
            }
        }
    }
}

function getInOrder(ordered: number[], root: TreeNode | undefined) {
    if (root) {
        getInOrder(ordered, root.left)

        if (root.value !== undefined) {
            ordered.push(root.value)
        }

        getInOrder(ordered, root.right)
    }

    return ordered
}

function search(ordered: number[], value: number) {
    const halfArrayIndex = Math.floor(ordered.length / 2)

    if (ordered.length === 0) return

    if (value === ordered[halfArrayIndex]) {
        return value
    } else if (value > ordered[halfArrayIndex]) {
        return search(ordered.slice(halfArrayIndex + 1), value)
    } else {
        return search(ordered.slice(0, halfArrayIndex), value)
    }
}

array.forEach(value => insert(value))

console.log('Tree: ' + util.inspect(root, { depth: 20 }))

console.log('InOrder: ', getInOrder([], root))

console.log(`Find 88: `, search(getInOrder([], root), 88))
