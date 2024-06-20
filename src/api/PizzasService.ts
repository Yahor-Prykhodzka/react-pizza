import axios from 'axios'

export default class PizzasService {
    static async getAll(){
        const response = await axios.get('https://6672ea7b6ca902ae11b25c2b.mockapi.io/pizzas')
        return response.data
    }
}