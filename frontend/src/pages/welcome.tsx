import { Button } from "../components/ui/button"


const Welcome = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black p-10">
            <div className="w-max">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">Welcome to ModelMerge</h1>
            </div>
            <Button>Get Started</Button>
        </div>
    )
}

export default Welcome