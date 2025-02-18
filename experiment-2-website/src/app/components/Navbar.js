import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/" className="navLinks">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="navLinks">
                        About
                    </Link>
                </li>
                {/* I can add more navigation links as I needed here!*/}
            </ul>
        </nav>
    )
}