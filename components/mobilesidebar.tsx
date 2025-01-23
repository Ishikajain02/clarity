"use client"
import { Button } from "./ui/button";
import { Menu  } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
const mobilesidebar=()=>{
    return(
        <Sheet>
        <SheetTrigger asChild>
             <Button variant="ghost" size={"icon"} className="md:hidden ">
                <div>
            <Menu/>
            </div>
        </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64 fixed top-0 left-0 bottom-0 md:hidden">
            <Sidebar/>

        </SheetContent>

        </Sheet>
    )
}
export default mobilesidebar