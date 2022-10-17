export const getRequest = async (queryString) => {
    const query = await fetch(queryString)
    const response = await query.json()
    return response
}