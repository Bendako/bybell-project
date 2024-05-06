"use client"

import { useState } from 'react';

const Navbar = () => {
    // State variables to manage dropdown visibility
    const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [contactDropdownOpen, setContactDropdownOpen] = useState(false);


    // I need to refactor this
    const bibleBooksArray = ["תורה", "נביאים", "כתובים"]
    const genesisBooks = ["בראשית", "שמות", "ויקרא", "במדבר", "דברים"]
    const prophetsBooks = ["יהושע", "שופטים", "שמואל א", "שמואל ב", "מלכים א", "מלכים ב", "ישעיה", "ירמיה", "יחזקאל", "הושע", "יואל", "עמוס", "עובדיה", "יונה", "מיכה", "נחום", "חבקוק", "צפניה", "חגי", "זכריה", "מלאכי"]
    const writingsBooks = ["תהילים", "משלי", "איוב", "שיר השירים", "רות", "איכה", "קהלת", "אסתר", "דניאל", "עזרא", "נחמיה", "דברי הימים א", "דברי הימים ב"]

    // Function to close other dropdowns when one is clicked
    const handleDropdownClick = (dropdownState: any, setDropdownState: any) => {
        setHomeDropdownOpen(false);
        setAboutDropdownOpen(false);
        setContactDropdownOpen(false);
        setDropdownState(!dropdownState);
    };

    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Horizontal Alignment */}
                <div className="flex justify-between items-center">
                    {/* Branding/Logo */}
                    <div>
                        <a href="#" className="text-white font-bold text-xl">ByBell</a>
                    </div>
                    {/* Navigation Links */}
                    <div className="flex">
                        {/* Home Dropdown */}
                        <div className="ml-4 relative">
                            <button
                                type="button"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:bg-gray-700"
                                onClick={() => handleDropdownClick(homeDropdownOpen, setHomeDropdownOpen)}
                                aria-haspopup="true"
                                aria-expanded={homeDropdownOpen ? "true" : "false"}
                            >
                                { bibleBooksArray[2] }
                            </button>
                            {/* Dropdown Panel */}
                            <div
                                className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${homeDropdownOpen ? 'block' : 'hidden'}`}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="home-menu"
                            >
                                <div className="py-1 overflow-y-scroll h-96" role="none">
                                { writingsBooks.map((book, i) => {
                                        return (
                                        <a 
                                        key={i}
                                        href="#" 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" 
                                        role="menuitem"
                                       >
                                           { writingsBooks[i] }
                                       </a>
                                        )
                                    }) }
                                </div>
                            </div>
                        </div>
                        {/* About Dropdown */}
                        <div className="ml-4 relative">
                            <button
                                type="button"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:bg-gray-700"
                                onClick={() => handleDropdownClick(aboutDropdownOpen, setAboutDropdownOpen)}
                                aria-haspopup="true"
                                aria-expanded={aboutDropdownOpen ? "true" : "false"}
                            >
                                { bibleBooksArray[1] }
                            </button>
                            {/* Dropdown Panel */}
                            <div
                                className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${aboutDropdownOpen ? 'block' : 'hidden'}`}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="about-menu"
                            >
                                <div className="py-1 overflow-y-scroll h-96" role="none">
                                { prophetsBooks.map((book, i) => {
                                        return (
                                        <a 
                                        key={i}
                                        href="#" 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" 
                                        role="menuitem"
                                       >
                                           { prophetsBooks[i] }
                                       </a>
                                        )
                                    }) }
                                </div>
                            </div>
                        </div>
                        {/* Contact Dropdown */}
                        <div className="ml-4 relative">
                            <button
                                type="button"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:bg-gray-700"
                                onClick={() => handleDropdownClick(contactDropdownOpen, setContactDropdownOpen)}
                                aria-haspopup="true"
                                aria-expanded={contactDropdownOpen ? "true" : "false"}
                            >
                                { bibleBooksArray[0] }
                            </button>
                            {/* Dropdown Panel */}
                            <div
                                className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${contactDropdownOpen ? 'block' : 'hidden'}`}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="contact-menu"
                            >
                                <div className="py-1" role="none">
                                    { genesisBooks.map((book, i) => {
                                        return (
                                        <a 
                                        key={i}
                                        href="#" 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" 
                                        role="menuitem"
                                       >
                                           { genesisBooks[i] }
                                       </a>
                                        )
                                    }) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
