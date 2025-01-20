import Navbar from "@/components/navbar";
import { UserButton, UserProfile } from "@clerk/nextjs"

const Layout=()=>{
    return(
        <div className="flex p-4 ">
            <Navbar/>
            
        </div>
    )
}
export default Layout;