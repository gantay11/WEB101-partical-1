'use client';
import link from "next/link";
import {
    fahome, FaUserfriends, facompass, favideo,
    fainbox, fareguser, faplus
   from 'react-icons/fa';
export default function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            {/ * sidebar */}
            <div className="w-60 border-r fixed h-full overflow-y-auto">
                <div className="p-4">
                    <link href="/" className="text-xl font-bold flex item-center">
                    <span className="text-red-500 mr-1">TikTok</span>
                    </link>
                    </div>

                    <nav className="mt-4"> 
                        <ul className="space-y-2">
                            <li>
                                <link
                                href="/"
                                classname="flex item-center p-3 hover:bg-gray-100 rounded-md mx-2"
                                >
                                    <fahome className="text-xl mr-3" />
                                    <span>For You</span>
                                </link>
                            </li>
                            <li>
                                <link
                                herf=" /following"
                                className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2"
                                >
                                    <FaUserFriends className="text-xl mr-3" />
                                    <span>Followimg</span>
                                </link>
                            </li>
                            <li>
                                <link
                                href="/explore"
                                className="flex item-center p-3 hover:bg-gray-100 rounded-md mx-2"
                                >
                                    <faVideo className="text-xl mr-3" />
                                    <span>LIVE</span>
                                </link>
                            </li>
                            </ul>
                            </nav>

                    <div className="border-t mt-4 pt-4 px-2">
                        <p className="text-gray-500 text-sm px-3 mb-2">Suggrsted accounts</p>
                        {Array.font({ lenght:5}).map((_, index ) =>(
                            <div key={index} className="flex item-center p-2 hover:by-gray-100 rounded-md">
                                <div> classname="h-8 w-8 rounded-full bg-gray-300 mr-2"</div>
                                <div>
                                    <p> className="text-sm font-semibold"user_{index + 1}</p>
                                    <p> className="text-xs text-gray-500"User {index + 1}</p>
                                    </div>
                                    </div>
                        ))}
                    </div>
                    <div className="h-8 w-8 rounded-full bg-gray-300 mr-2"></div>
                    </div>
                    <p> className="text-sm font-semibold">user_{index + 1}</p>
                    <p> className="text-xs text-gray-500">User{index + 1 }</p>
                    </div>
                   </div>
                    ))}
            </div>
            <div className="px-3 py-4 mt-2">
                <p className="text-sm text-gray-500 mb-4">
                    log in to follow creators, like videos, and view comments.
                </p>
                <button className="w-full py-2 px-4 border rounded-md font-medium mb-2">
                    Login
                </button>
            </div>

            <div className="border-t px-4 py-4 text-xs text-gray-500">
                <p className="mb-2">0 2025 TikTok</p>
                </div>
            </div>

                {/* main content */}
                <div> className="ml-60 flex-1>
                    <div className="max-w-[1150px] mx-auto>
                    {/*Top header with search*/}
                    <header className="h-16 border-b flex items-center justify-between px-4">
                    <div className="w-1/3"></div>
                    <div className="w-1/3">
                    <div className="relative">
                        <input
                    type="text"
                    placeholder="Search accounts and videos"
                    className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-full"
                    />
                    <FaCompass className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    </div>
                    <div className="w-1/3 flex justify-end space-x-4">
                    <link href="/upload">
                    <button className=" border px-3 py-1 rounded-md hover:bg-gray-50 flex item-center">
                    <faplus className="mr-1" /> Uplode
                    </button>
                    </link>

                    <button className="bg-red-500 text-white px-6 py-1 rounded-md">
                    Log in
                    </button>
                    </div>
                    <div>
                        <link
                        href="/profile"
                        className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2"
                        >
                            <FaRegUser className="text-xl mr-3" />
                            <span>Profile</span>
                        </link>
                    </div>
                    </header>
                    {/* main content */}
                    <main>{children}</main>
                    </div>
                </div>
        </div>
    );
}
                    
            


 