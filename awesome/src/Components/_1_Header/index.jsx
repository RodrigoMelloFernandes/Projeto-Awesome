import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaApple } from 'react-icons/fa';
import styles from './Header.module.scss';
import { useState } from 'react';


function Header () {
    const [ menuMobile, setMenuMobile ] = useState(false);

    return (
        <header className={styles.h}>
            <div className={styles.h__menu}>
                <h2 className={styles.h__menu___title}>Awesome</h2>
                <div className={styles.containerMenu}
                    onClick={() => setMenuMobile(!menuMobile)}>
                    <div className={styles.menuHamburguer}>
                        <span className={styles.menuHamburguer__span}></span>
                        <span className={styles.menuHamburguer__span}></span>
                        <span className={styles.menuHamburguer__span}></span>
                    </div>
                    <nav className={
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
                    </nav>
                </div>  
            </div>
      
            <div className={styles.h__contacts}> 
                <div className={styles.h__contacts___containerPhone}>
                    <FaPhoneAlt className={styles.h__contacts___containerPhone____phoneIcon}/>
                    <h3 className={styles.h__contacts___containerPhone____title}>Phone</h3>
                    <p className={styles.h__contacts___containerPhone____subtitle}>010-020-0340</p>
                </div>
                <div className={styles.h__contacts___containerEmail}>
                    <FaEnvelope className={styles.h__contacts___containerEmail____emailIcon}/>
                    <div className={styles.h__contacts___containerEmail____containerEmailDesktop}>
                        <h3 className={styles.h__contacts___containerEmail____title}>Email</h3>
                        <a href="#" className={styles.h__contacts___containerEmail____subtitle}>awesome@company.com</a>
                    </div>
                </div>
                <div className={styles.h__contacts___containerSocialMedia}>
                    <h3 className={styles.h__contacts___containerSocialMedia____title}>Meet us on</h3>
                    <a className={styles.h__contacts___containerSocialMedia____icon} href="#">
                        <FaFacebookF/>
                    </a>
                    <a className={styles.h__contacts___containerSocialMedia____icon} href="#">
                        <FaTwitter/>
                    </a>
                    <a className={styles.h__contacts___containerSocialMedia____icon} href="#">
                        <FaInstagram />
                    </a>
                    <a className={styles.h__contacts___containerSocialMedia____icon} href="#">
                        <FaApple/>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header