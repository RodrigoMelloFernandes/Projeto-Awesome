import { FaPhone, FaRegEnvelope, FaMapMarkerAlt,  FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from './ContactAwesome.module.scss';

function ContactAwesome () {
    return (
        <>
        <footer className={styles._7}>
            <h2 className={styles._7__title}>contact <span className={styles._7__title___span}>awesome</span></h2>

            <div className={styles._7__containerDesktop}>
                <div className={styles._7__containerDesktopInput}>
                    <h3 className={styles._7__inputTitle}>name</h3>
                    <input className={styles._7__input} type="text" />
                    <h3 className={styles._7__inputTitle}>email</h3>
                    <input className={styles._7__input} type="text" />
                    <h3 className={styles._7__inputTitle}>message</h3>
                    <input className={styles._7__input} type="text" />
                    <button className={styles._7__button}>Enviar</button>
                </div>

                <div className={styles._7__containerDesktopAdress}>
                    <h2 className={styles._7__titleAdress}>our adress</h2>
                    <p className={styles._7__subtitleAdress}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
                    
                    <div className={styles._7__containerIcon}>
                        <div className={styles._7__containerIcon___container}>
                            <div className={styles._7__containerIcon___container____box}>
                                <FaPhone className={styles._7__containerIcon___container____box_____icon}/>
                            </div>
                            <p className={styles._7__containerIcon___container____subtitle}>010-020-0340</p>
                        </div>
                    
                        <div className={styles._7__containerIcon___container}>
                            <div className={styles._7__containerIcon___container____box}>
                                <FaRegEnvelope className={styles._7__containerIcon___container____box_____icon}/>
                            </div>
                            <p className={styles._7__containerIcon___container____subtitle}>awesome@company.com</p>
                        </div>
                    
                        <div className={styles._7__containerIcon___container}>
                            <div className={styles._7__containerIcon___container____box}>
                                <FaMapMarkerAlt className={styles._7__containerIcon___container____box_____icon}/>
                            </div>
                            <p className={styles._7__containerIcon___container____subtitle}>663 New Walk Roadside, Birdeye View, GO </p>
                        </div>
                            <p className={styles._7__containerIcon___subtitleNumber}>11020</p>
                    </div>
                    <hr className={styles._7__breakline}/>
                    <div className={styles._7__socialMediaContainer}>
                        <h3 className={styles._7__socialMediaContainer___socialMediaTitle}>we are social</h3>
                        <div className={styles._7__socialMediaContainer___containerBox}>
                            <a href="#" className={styles._7__socialMediaContainer___container}><FaFacebookF/></a>
                            <a href="#" className={styles._7__socialMediaContainer___container}><FaTwitter/></a>
                            <a href="#" className={styles._7__socialMediaContainer___container}><FaInstagram/></a>
                        </div>
                    </div>
                    </div>
                </div>

            </footer>
            <div className={styles.copyrightContainer}>
                <p className={styles.copyrightContainer__subtitle}>Copyright © 2084 Company Name</p>  
            </div>
        
        </>
    )
}

export default ContactAwesome