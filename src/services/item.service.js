import axios from "axios";

export default class ItemService {
    static async GetRange() {
        const params = {
            startRange: 0,
            endRange: 9
        };
        return axios
            .get("/items/getrange", { params })
            
    }
    static async GetByID(id) {
        return axios
                .get("/items?id=" + id)
    }
}