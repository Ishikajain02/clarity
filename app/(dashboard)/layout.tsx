import Navbar from "@/components/navbar";
import  Sidebar  from "@/components/sidebar";
import Layout from "./(routes)/dashboard/page";
export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
  
      
        <div className="h-full relative ">
           <div className="hidden h-full md:flex md:flex-col bg-blue-950 md:fixed w-64 md:inset-y-0 z-[80]">
           <Sidebar/>
           </div>
            <main className="md:pl-64 h-full flex flex-col">
                <Navbar/>
                <Layout/>
                
            </main>
        </div>
      
    );
  }
  