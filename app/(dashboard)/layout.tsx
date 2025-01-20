import  Sidebar  from "@/components/sidebar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
  
      
        <div className="h-full relative">
          
           <Sidebar/>
            <main className="pl-64 h-full">
                {children}
            </main>
        </div>
      
    );
  }
  