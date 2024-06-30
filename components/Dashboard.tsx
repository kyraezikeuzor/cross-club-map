export const Dashboard = ({children}:{children:React.ReactNode}) => {
    return (
        <section className="relative d w-[100%] h-screen z-40">
            {children}
        </section>
    )
}

export const DashboardNavbar = ({}) => {

    return (
        <nav className='fixed top-0 z-[9999] w-full border-b-2 border-grey-400 bg-white px-5 py-3'>
            <span className='text-base font-semibold'>Maply | Texas Gulf Coast Red Cross Clubs</span>
        </nav>
    )
}

export const DashboardSidebar = ({children}:{children:React.ReactNode}) => {
    return (
        <aside className='absolute z-[9998] left-0 top-0 w-1/3 lg:w-1/5 h-full flex flex-col space-y-8 bg-white p-5 shadow-xl'>
            <div className='mt-12'>
                {children}
            </div>
        </aside>
    )
}

export const DashboardSidebarContent = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='flex flex-col space-y-2'>
            {children}
        </div>
    )
}