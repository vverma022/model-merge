import { Button } from './button'
import { useTheme } from '../ui/theme-provider'
import { useState } from 'react'

const Modebutton = () => {
    const { theme, setTheme } = useTheme()
    const [mode, setMode] = useState("Light Mode")

    const handleModeChange = () => {
        if (theme === "light") {
            setTheme("dark")
            setMode("Light ")
        } else {
            setTheme("light")
            setMode("Dark")
        }
    }

    return (
        <div>
            <Button onClick={handleModeChange} variant="outline" size="sm" className="w-full">{mode}</Button>
        </div>
    )
}

export default Modebutton