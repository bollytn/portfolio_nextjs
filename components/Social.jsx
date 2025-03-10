import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: '/' },
    { icon: <FaLinkedinIn />, path: '/' },
    { icon: <FaYoutube />, path: '/' },
    { icon: <FaTwitter />, path: '/' },
]

export default function Social({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {
                socials.map((item, index) => (
                    <Link
                        key={index}
                        href={item.path}
                        className={iconStyles}
                    >
                        {item.icon}
                    </Link>
                ))
            }
        </div>
    )
}