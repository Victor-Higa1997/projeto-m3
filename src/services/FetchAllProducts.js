
export const FetchAllProducts = async () =>{
    const response = await fetch('http://localhost:5000/products')
    try {
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}