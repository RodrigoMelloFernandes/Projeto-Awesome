import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaApple } from 'react-icons/fa';
import styles from './Header.module.scss';


function Header () {
    return (
        <header className={styles.header}>
            <nav>
                <h2 className={styles.header__title}>Awesome</h2>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div>
                    <li>
                        <ul>
                            <a href="">Home</a>
                        </ul>
                        <ul>
                            <a href="">About</a>
                        </ul>
                        <ul>
                            <a href="">Team</a>
                        </ul>
                        <ul>
                            <a href="">Service</a>
                        </ul>
                        <ul>
                            <a href="">Portfolio</a>
                        </ul>
                        <ul>
                            <a href="">Contact</a>
                        </ul>
                    </li>
                </div>
            </nav>

            
            <div> 
                <FaPhoneAlt/>
                <h3>Phone</h3>
                <p>010-020-0340</p>
                <FaEnvelope/>
                <h3>Email</h3>
                <p>awesome@company.com</p>
                <h3>Meet us on</h3>
                <FaFacebookF/>
                <FaTwitter/>
                <FaInstagram/>
                <FaApple/>
            </div>
        </header>
    )
}

export default Header