import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom"


const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className="flex min-h-screen items-center justify-center p-10">
            <div className="w-max">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4  pr-5 text-5xl  font-bold">Welcome to ModelMerge</h1>
                <div className="flex justify-center mt-8">
                    <Button onClick={() => navigate("/main")} className="bg-red-600 hover:bg-red-400 text-white">Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default Welcome