import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                {/* I can add more navigation links as I needed here!*/}
            </ul>
        </nav>
    )
}