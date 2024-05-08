interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <header className="fixed min-w-full">
            <div className="color-text-primary flex min-w-full justify-between text-xl">
                <nav>
                    <ul className="flex gap-8">
                        <li>
                            <a href="#">O nas</a>
                        </li>
                        <li>
                            <a href="#">Atrakcje</a>
                        </li>
                        <li>
                            <a href="#">Galeria</a>
                        </li>
                        <li>
                            <a href="#">Jak dojechać</a>
                        </li>
                        <li>
                            <a href="#">Kontakt</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
