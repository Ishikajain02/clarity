import { UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import Mobilesidebar from "./mobilesidebar"
import { Menu } from "lucide-react"
const Navbar=()=>{
    return(
        <div className="flex items-center p-4 w-full">
        
        <Mobilesidebar/>
        <div className="flex justify-end w-full">
            <UserButton/>
        </div>
        </div>
    )
}
export default Navbar