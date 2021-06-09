import Link from 'next/link';
import style from './main-header.module.css';

const MainHeader = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <Link href="">Next Events</Link>
            </div>
            <nav className={style.navigation}>
                <ul>
                    <li>
                        <Link href="/events">Browse all events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
