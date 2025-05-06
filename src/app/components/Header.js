import Link from "next/link";
import "../styles/header.scss";

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-container">
                    <Link href="/" className="nav-logo">
                        PromoHub
                    </Link>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/projects" className="nav-link">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
                <button className="nav-toggle" aria-label="Toggle menu">
                    ☰
                </button>
                </div>
            </nav>
        </header>
    )
}