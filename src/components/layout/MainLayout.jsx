import link from "next/link";
export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 bg-white border-b">
                <div className="flex items-center justify-between h-16 px-4">
                    <link href="/" className="text-xl font-bold">
                      TikTok
                    </link>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <link href="/" classHame="hover:text-red-500">
                                Home 
                                </link>
                            </li>
                            <li>
                                <link href="/profile" className="hover:text-red-500">
                                Profile
                                </link>
                            </li>
                            <li>
                                <link href="/upload" className="hover:text-red-500">
                                Upload
                                </link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="flex-grow">
                {children}
            </main>
        </div>
            
            
    )
}