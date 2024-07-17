import styles from './Header.module.css'
import skzLogo from '../../assets/skz-logo.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={skzLogo} alt='logo tipo skz logo' />
        </header>
    )
}