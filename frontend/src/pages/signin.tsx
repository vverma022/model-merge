import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function Signin() {
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Error, SetError] = useState('');
    const [Success, SetSuccess] = useState(' ');
    const navigate = useNavigate();

    interface ErrorProps {
        response: any
        error: string;
        event: string;
    }

    const handlesubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:6030/auth/login', {
                email: Email,
                password: Password,
              });
             SetSuccess(response.data.message);
             sessionStorage.setItem('token', response.data.authtoken);
             setTimeout(() => {
                navigate('/main');
              }, 10000);
        } catch (error: any){
            SetError((error as ErrorProps).response.data.error);
            SetSuccess('');
        }
    }

return (
    <div className="flex justify-center items-center h-screen">
        <Card className="mx-auto max-w-sm">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold flex justify-center">Login</CardTitle>
                <CardDescription className="text-center">Enter your email and password to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handlesubmit}>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" value={Email} onChange={(e) => SetEmail(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" value={Password} onChange={(e) => SetPassword(e.target.value)} required />
                    </div>
                    <Button type="submit" className="w-full hover:bg-red-600">
                        Login
                    </Button>
                    <Button type="button"  className="w-full bg-secondary text-primary" onClick={() => navigate('/signup')}>
                        Don't have an account? Sign up
                    </Button>
                </div>
                {Success && <div className="text-green-600">{Success}</div>}
                </form>
            </CardContent>
        </Card>
    </div>
)
}