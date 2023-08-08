//AuthService con backend
import { ref, Ref } from "vue"

export class AuthService {
    private jwt: Ref<string>
    private error: Ref<string>
    constructor() {
        this.jwt = ref("") 
        this.error = ref("")
    }

    getJwt(): string {
        return this.jwt.value
    }

    getError(): string {
        return this.error.value
    }

    async login (email: string, password: string): Promise<boolean> {
        try {
            const res = await fetch("https://hfp69ilv.directus.app/auth/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    email: email, 
                    password: password
                })
            })
            const data = await res.json()

            if("erros" in data) {
                this.error.value = "Login failed"
                return false
            }
            this.jwt.value = data.access_token
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
        
    
}