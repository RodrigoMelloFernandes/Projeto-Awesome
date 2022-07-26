import { FaPhone, FaRegEnvelope, FaMapMarkerAlt,  FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from './ContactAwesome.module.scss';

function ContactAwesome () {
    return (
        <>
        <footer className={styles.contactAwesome}>
            <h2 className={styles.contactAwesome__title}>contact <span className={styles.contactAwesome__title___span}>awesome</span></h2>

            <h3 className={styles.contactAwesome__inputTitle}>name</h3>
            <input className={styles.contactAwesome__input} type="text" />

            <h3 className={styles.contactAwesome__inputTitle}>email</h3>
            <input className={styles.contactAwesome__input} type="text" />

            <h3 className={styles.contactAwesome__inputTitle}>message</h3>
            <input className={styles.contactAwesome__input} type="text" />

            <button className={styles.contactAwesome__button}>Enviar</button>

            <h2 className={styles.contactAwesome__titleAdress}>our adress</h2>
            <p className={styles.contactAwesome__subtitleAdress}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>

            <div className={styles.contactAwesome__containerIcon}>
                <div className={styles.contactAwesome__containerIcon___container}>
                    <div className={styles.contactAwesome__containerIcon___container____box}>
                        <FaPhone className={styles.contactAwesome__containerIcon___container____box_____icon}/>
                    </div>
                    <p className={styles.contactAwesome__containerIcon___container____subtitle}>010-020-0340</p>
                </div>
                
                <div className={styles.contactAwesome__containerIcon___container}>
                    <div className={styles.contactAwesome__containerIcon___container____box}>
                        <FaRegEnvelope className={styles.contactAwesome__containerIcon___container____box_____icon}/>
                    </div>
                    <p className={styles.contactAwesome__containerIcon___container____subtitle}>awesome@company.com</p>
                </div>
                
                <div className={styles.contactAwesome__containerIcon___container}>
                    <div className={styles.contactAwesome__containerIcon___container____box}>
                        <FaMapMarkerAlt className={styles.contactAwesome__containerIcon___container____box_____icon}/>
                    </div>
                    <p className={styles.contactAwesome__containerIcon___container____subtitle}>663 New Walk Roadside, Birdeye View, GO 11020</p>
                </div>
            </div>

            <hr className={styles.contactAwesome__breakline}/>

            <div className={styles.contactAwesome__socialMediaContainer}>
                <h3 className={styles.contactAwesome__socialMediaContainer___socialMediaTitle}>we are social</h3>
                <div className={styles.contactAwesome__socialMediaContainer___container}><FaFacebookF/></div>
                <div className={styles.contactAwesome__socialMediaContainer___container}><FaTwitter/></div>
                <div className={styles.contactAwesome__socialMediaContainer___container}><FaInstagram/></div>
            </div>
        </footer>
            <div className={styles.copyrightContainer}>
                <p className={styles.copyrightContainer__subtitle}>Copyright © 2084 Company Name</p>  
            </div>
        
        </>
    )
}

export default ContactAwesome