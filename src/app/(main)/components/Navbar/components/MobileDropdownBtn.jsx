"use client";

import Link from "next/link";
import { useState } from "react";

const MobileDropdownBtn = ({item, setIsOpen}) => {
        const [moblileDropdown, setMoblileDropdown] = useState(false);

        const onMobileClick = () => {
            setMoblileDropdown(false);
            setIsOpen(false);
        }
        
    return (
        <>
            <button
                onClick={() => setMoblileDropdown(!moblileDropdown)}
            >
                <svg
                    className={`ml-2 h-5 w-5 transition-transform duration-200 stroke-white ${moblileDropdown && "rotate-180"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={5}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {moblileDropdown && (
                <div className="px-4 py-2">
                    {item.dropdownItems.map((dropdownItem) => (
                        <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-xl"
                            onClick={() => onMobileClick()}
                        >
                            {dropdownItem.name}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}

export default MobileDropdownBtn
