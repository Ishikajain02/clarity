import { UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
const Navbar=()=>{
    return(
        <div className="flex items-center p-4">
        
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
            <Menu></Menu>
        </Button>
        <div className="flex justify-end w-full">
            <UserButton/>
        </div>
        </div>
    )
}
export default Navbar