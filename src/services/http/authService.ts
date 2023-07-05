import {httpClient} from "@/services/http/httpClient.ts";
import {RegisterDto} from "@/dtos/authDtos/Auth.ts";

class AuthService {
    async register(userDto: RegisterDto) {
        const {data, status} = await httpClient.post('/api/registration', {...userDto});
        if (status === 201) {
            console.log(data);
        }
    }
    async login() {

    }
    async logout() {

    }
    async refreshToken() {

    }
}

export default new AuthService();
