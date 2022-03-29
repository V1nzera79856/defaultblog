import "./header.scss"


export const Header = () => {

    return (
        <>
            <section className="section section__header">
                <header className="blog__header">
                    <div className="header__logo">

                    </div>
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="list__item"><a className="list__link" href="/">Home</a></li>
                            <li className="list__item"><a className="list__link" href="/">About</a></li>
                            <li className="list__item"><a className="list__link" href="/">Contact</a></li>
                            <li className="list__item"><a className="list__link" href="/">Shop</a></li>
                            <li className="list__item"><a className="list__link" href="/">News</a></li>
                            <li className="list__item">
                                <label className="switch">
                                <input type="checkbox" className="checkbox" />
                                    <span className="slider round">

                                    </span>
                                </label>
                            </li>
                        </ul>
                    </nav>
                </header>
            </section>
        </>
    );
}