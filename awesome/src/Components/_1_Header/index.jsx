import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaApple } from 'react-icons/fa';
import styles from './Header.module.scss';
import { useState } from 'react';


function Header () {
    const [ menuMobile, setMenuMobile ] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.header__menu}>
                <h2 className={styles.header__menu___title}>Awesome</h2>
                <div className={styles.containerMenu}
                    onClick={() => setMenuMobile(!menuMobile)}>
                    <div className={styles.menuHamburguer}>
                        <span className={styles.menuHamburguer__span}></span>
                        <span className={styles.menuHamburguer__span}></span>
                        <span className={styles.menuHamburguer__span}></span>
                    </div>
                    <div className={
                        menuMobile 
                        ? `${styles.menuHamburguerListClose}`
                        : `${styles.menuHamburguerListOpen}`
                    }>
                        <ul>
                            <li className={styles.menuHamburguerListOpen__itemLi}>
                                <a href="#" className={styles.menuHamburguerListOpen__itemLi___a}>Home</a>
                            </li>
                            <li className={styles.menuHamburguerListOpen__itemLi}>
                                <a href="#" className={styles.menuHamburguerListOpen__itemLi___a}>About</a>
                            </li>
                            <li className={styles.menuHamburguerListOpen__itemLi}>
                                <a href="#" className={styles.menuHamburguerListOpen__itemLi___a}>Team</a>
                            </li>
                            <li className={styles.menuHamburguerListOpen__itemLi}>
                                <a href="#" className={styles.menuHamburguerListOpen__itemLi___a}>Service</a>
                            </li>
                            <li className={styles.menuHamburguerListOpen__itemLi}>
                                <a href="#" className={styles.menuHamburguerListOpen__itemLi___a}>Portfolio</a>
                            </li>
                            <li className={styles.menuHamburguerListOpen__itemLi}>
                                <a href="#" className={styles.menuHamburguerListOpen__itemLi___a}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>  
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