interface Array<T> {
    distinct(): Array<T>
}

Array.prototype.distinct = function () {
    const uniqueValues: any[] = []

    this.forEach(value => {
        if (!uniqueValues.includes(value)) uniqueValues.push(value)
    })

    return uniqueValues
}
