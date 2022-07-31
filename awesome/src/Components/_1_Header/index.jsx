import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaApple } from 'react-icons/fa';
import styles from './_1_.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';


function Header () {
    const [ menuMobile, setMenuMobile ] = useState(false);
    const cardVariants = {
        offscreen: {
          opacity : 0
        },
        onscreen: {
          opacity : 1,
          transition: {
            type: "tween",
            bounce: 0.4,
            duration: 1.5,
          }
        }
      };

    return (
        <motion.header className={styles.header}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
        >
            <div className={styles.header__menu}>
                <h2 className={styles.header__menu___title}>Awesome</h2>
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
      
            <div className={styles.header__contacts}> 
                <div className={styles.header__contacts___containerPhone}>
                    <FaPhoneAlt className={styles.header__contacts___containerPhone____phoneIcon}/>
                    <h3 className={styles.header__contacts___containerPhone____title}>Phone</h3>
                    <p className={styles.header__contacts___containerPhone____subtitle}>010-020-0340</p>
                </div>
                <div className={styles.header__contacts___containerEmail}>
                    <FaEnvelope className={styles.header__contacts___containerEmail____emailIcon}/>
                    <div className={styles.header__contacts___containerEmail____containerEmailDesktop}>
                        <h3 className={styles.header__contacts___containerEmail____title}>Email</h3>
                        <a href="#" className={styles.header__contacts___containerEmail____subtitle}>awesome@company.com</a>
                    </div>
                </div>
                <div className={styles.header__contacts___containerSocialMedia}>
                    <h3 className={styles.header__contacts___containerSocialMedia____title}>Meet us on</h3>
                    <a className={styles.header__contacts___containerSocialMedia____link} href="#">
                        <FaFacebookF className={styles.header__contacts___containerSocialMedia____link_____icon}/>
                    </a>
                    <a className={styles.header__contacts___containerSocialMedia____link} href="#">
                        <FaTwitter className={styles.header__contacts___containerSocialMedia____link_____icon}/>
                    </a>
                    <a className={styles.header__contacts___containerSocialMedia____link} href="#">
                        <FaInstagram className={styles.header__contacts___containerSocialMedia____link_____icon}/>
                    </a>
                    <a className={styles.header__contacts___containerSocialMedia____link} href="#">
                        <FaApple className={styles.header__contacts___containerSocialMedia____link_____icon}/>
                    </a>
                </div>
            </div>
        </motion.header>
    )
}

export default Header