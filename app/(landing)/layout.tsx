import { UserButton, UserProfile } from "@clerk/nextjs"
import Navbar from "@/components/navbar";
{/*this is for / only*/}
const Layout=()=>{
    return(
        <div>
            <Navbar/>
            <UserButton  />
        </div>
    )
}
export default Layout;