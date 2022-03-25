import "./header.scss"

export const Header = () => {
    return (
        <>
            <section className="section section__header">
                <header className="blog__header">
                    <div className="header__logo">logo</div>
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="list__item"><a className="list__link" href="/">link</a></li>
                            <li className="list__item"><a className="list__link" href="/">link</a></li>
                            <li className="list__item"><a className="list__link" href="/">link</a></li>
                            <li className="list__item"><a className="list__link" href="/">link</a></li>
                            <li className="list__item"><a className="list__link" href="/">link</a></li>
                            <li className="list__item"><a className="list__link" href="/">link</a></li>
                        </ul>
                    </nav>
                </header>
            </section>
        </>
    );
}