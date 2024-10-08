import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { ErrorProps } from "../utils/interfaces"
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

export default function Signin() {
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Error, SetError] = useState('');
    const [Success, SetSuccess] = useState(' ');
    const [ShowPassword,SetShowPassword] = useState(eyeOff);

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        SetShowPassword(!ShowPassword);
    };

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
            <div className="relative">
                <Input
                    id="password"
                    type={ShowPassword ? 'text' : 'password'}
                    value={Password}
                    onChange={(e) => SetPassword(e.target.value)}
                    required
                />
                <span 
                    onClick={togglePasswordVisibility} 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                    <Icon icon={ShowPassword ? eyeOff : eye} size={20} />
                </span>
            </div>
        </div>
                    <Button type="submit" className="w-full hover:bg-red-600">
                        Login
                    </Button>
                    <Button type="button"  className="w-full bg-secondary text-primary hover:bg-slate-600" onClick={() => navigate('/signup')}>
                        Don't have an account? Sign up
                    </Button>
                </div>
                {Success && <div className="text-green-600 text-center">{Success}</div>}
                {Error && <div className="text-red-600 text-center">{Error}</div>}
                </form>
            </CardContent>
        </Card>
    </div>
)
}