import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaApple } from 'react-icons/fa';
import styles from './Header.module.scss';


function Header () {
    return (
        <header className={styles.header}>
            <nav className={styles.header__menu}>
                <h2 className={styles.header__menu___title}>Awesome</h2>


                {/* <div>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Team</a>
                        </li>
                        <li>
                            <a href="#">Service</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div> */}
            </nav>
      
            <div className={styles.header__contacts}> 
                <div className={styles.header__contacts___containerPhone}>
                    <FaPhoneAlt className={styles.header__contacts___containerPhone____phoneIcon}/>
                    <h3 className={styles.header__contacts___containerPhone____title}>Phone</h3>
                    <p className={styles.header__contacts___containerPhone____subtitle}>010-020-0340</p>
                </div>
                <div className={styles.header__contacts___containerEmail}>
                    <FaEnvelope className={styles.header__contacts___containerEmail____emailIcon}/>
                    <h3 className={styles.header__contacts___containerEmail____title}>Email</h3>
                    <p className={styles.header__contacts___containerEmail____subtitle}>awesome@company.com</p>
                </div>
                <div className={styles.header__contacts___containerSocialMedia}>
                    <h3 className={styles.header__contacts___containerSocialMedia____title}>Meet us on</h3>
                    <FaFacebookF className={styles.header__contacts___containerSocialMedia____icon}/>
                    <FaTwitter className={styles.header__contacts___containerSocialMedia____icon}/>
                    <FaInstagram className={styles.header__contacts___containerSocialMedia____icon}/>
                    <FaApple className={styles.header__contacts___containerSocialMedia____icon}/>
                </div>
            </div>
        </header>
    )
}

export default Header