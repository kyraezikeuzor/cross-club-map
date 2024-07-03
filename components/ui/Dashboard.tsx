export const Dashboard = ({children}:{children:React.ReactNode}) => {
    return (
        <section className="relative w-[100%] h-screen z-40">
            {children}
        </section>
    )
}

export const DashboardContent = ({children}:{children:React.ReactNode}) => {
    return (
        <section className="relative w-[100%] h-screen">
            {children}
        </section>
    )
}


export const DashboardNavbar = ({children}:{children:React.ReactNode}) => {

    return (
        <nav className='fixed top-0 z-[9999] w-full border-b-2 border-grey-400 bg-white px-5 py-2 shadow-m'>
            <span className='text-base font-semibold'>{children}</span>
        </nav>
    )
}

export const DashboardNavbarTitle = ({children}:{children:React.ReactNode}) => {

    return (
        <nav className='fixed top-0 z-[9999] w-full border-b-2 border-grey-400 bg-white px-5 py-2 shadow-m'>
            <span className='text-base font-semibold'>{children}</span>
        </nav>
    )
}


export const DashboardSidebar = ({children,className}:{children:React.ReactNode,className?:string}) => {
    return (
        <aside className={`${className} absolute z-[9998] left-0 top-0 overflow-y-scroll w-1/3 lg:w-[400px] h-full flex flex-col space-y-8 bg-white px-5 py-3 shadow-2xl`}>
            <div className='mt-10'>
                {children}
            </div>
        </aside>
    )
}

export const DashboardSidebarHeader = ({children,className}:{children:React.ReactNode,className?:string}) => {
    return (
        <div className={`${className} w-full h-fit flex flex-col space-y-2 py-3`}>
            {children}
        </div>
    )
}

export const DashboardSidebarTitle = ({children,className}:{children:React.ReactNode,className?:string}) => {
    return (
        <span className='font-semibold text-xl'>
            {children}
        </span>
    )
}

export const DashboardSidebarDescription = ({children,className}:{children:React.ReactNode,className?:string}) => {
    return (
        <span className='text-sm text-gray-500'>
            {children}
        </span>
    )
}

export const DashboardSidebarContent = ({children,className}:{children:React.ReactNode,className?:string}) => {
    return (
        <div className={`${className} flex flex-col space-y-2 py-2`}>
            {children}
        </div>
    )
}

export const DashboardSidebarItem = ({children,className}:{children:React.ReactNode,className?:string}) => {
    return (
        <div className={`${className} flex flex-col space-y-2 py-2`}>
            {children}
        </div>
    )
}

export const DashboardPopup = ({children,className}:{children:React.ReactNode,className?:string}) => {
    return (
        <div>
            {children}
        </div>
    )
}