import axios from "axios";

export default class UserService {
    static async GetByUsername(username) {
        return axios.get("/users?username=" + username)
                
            
    }
}