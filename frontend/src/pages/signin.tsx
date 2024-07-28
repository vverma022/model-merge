import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom"

export default function Signin() {
    const navigate = useNavigate()
return (
    <div className="flex justify-center items-center h-screen">
        <Card className="mx-auto max-w-sm">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold flex justify-center">Login</CardTitle>
                <CardDescription className="text-center">Enter your email and password to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full hover:bg-red-600">
                        Login
                    </Button>
                    <Button type="button"  className="w-full bg-secondary text-primary" onClick={() => navigate("/signup")}>
                        Don't have an account? Sign up
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
)
}