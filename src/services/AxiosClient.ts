// não está em uso
import axios from "axios"

function urlMes(mes: string) {
    return `http://localhost:3333/sequencia/${mes}`
}
const mesAPI = axios.create()

async function getMes(mes: string) {
    const url = urlMes(mes)
    const response = await mesAPI.get(url)
    return response.data
}

export {
    getMes
}