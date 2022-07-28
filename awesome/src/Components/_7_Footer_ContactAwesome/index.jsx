import { FaPhone, FaRegEnvelope, FaMapMarkerAlt,  FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from './ContactAwesome.module.scss';

function ContactAwesome () {
    return (
        <>
        <footer className={styles.c}>
            <h2 className={styles.c__title}>contact <span className={styles.c__title___span}>awesome</span></h2>

            <h3 className={styles.c__inputTitle}>name</h3>
            <input className={styles.c__input} type="text" />

            <h3 className={styles.c__inputTitle}>email</h3>
            <input className={styles.c__input} type="text" />

            <h3 className={styles.c__inputTitle}>message</h3>
            <input className={styles.c__input} type="text" />

            <button className={styles.c__button}>Enviar</button>

            <h2 className={styles.c__titleAdress}>our adress</h2>
            <p className={styles.c__subtitleAdress}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>

            <div className={styles.c__containerIcon}>
                <div className={styles.c__containerIcon___container}>
                    <div className={styles.c__containerIcon___container____box}>
                        <FaPhone className={styles.c__containerIcon___container____box_____icon}/>
                    </div>
                    <p className={styles.c__containerIcon___container____subtitle}>010-020-0340</p>
                </div>
                
                <div className={styles.c__containerIcon___container}>
                    <div className={styles.c__containerIcon___container____box}>
                        <FaRegEnvelope className={styles.c__containerIcon___container____box_____icon}/>
                    </div>
                    <p className={styles.c__containerIcon___container____subtitle}>awesome@company.com</p>
                </div>
                
                <div className={styles.c__containerIcon___container}>
                    <div className={styles.c__containerIcon___container____box}>
                        <FaMapMarkerAlt className={styles.c__containerIcon___container____box_____icon}/>
                    </div>
                    <p className={styles.c__containerIcon___container____subtitle}>663 New Walk Roadside, Birdeye View, GO </p>
                </div>
                    <p className={styles.c__containerIcon___subtitleNumber}>11020</p>
            </div>

            <hr className={styles.c__breakline}/>

            <div className={styles.c__socialMediaContainer}>
                <h3 className={styles.c__socialMediaContainer___socialMediaTitle}>we are social</h3>
                <div className={styles.c__socialMediaContainer___container}><FaFacebookF/></div>
                <div className={styles.c__socialMediaContainer___container}><FaTwitter/></div>
                <div className={styles.c__socialMediaContainer___container}><FaInstagram/></div>
            </div>
        </footer>
            <div className={styles.copyrightContainer}>
                <p className={styles.copyrightContainer__subtitle}>Copyright © 2084 Company Name</p>  
            </div>
        
        </>
    )
}

export default ContactAwesome