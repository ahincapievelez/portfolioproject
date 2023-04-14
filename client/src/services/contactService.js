import { customAxios } from './api'

export async function createContact(contact) {
    const axios = customAxios()
    try {
        const response = await axios.post('/contact', contact)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}