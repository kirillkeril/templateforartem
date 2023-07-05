import AuthService from "@/services/http/authService.ts";
import {RegisterDto} from '@/dtos/authDtos/Auth.ts';
class AuthController {
    async register(userDto: RegisterDto) {
        try {
            const data = await AuthService.register(userDto);
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }
    async login() {}
    async logout() {}
    async refresh() {}
}

export default new AuthController();
