import { FaPhone, FaRegEnvelope, FaMapMarkerAlt,  FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from './_7_.module.scss';
import { motion } from 'framer-motion';

function ContactAwesome () {
    const h2Variants = {
        offscreen: {
            scale : 0
        },
        onscreen : {
            scale : [ .3, 1.05 , .9, 1],
            transition : 1.5,
            delay : 1.5
        }
    }

    const leftContainerVariants = {
        offscreen : { 
            x : "-50px",
            opacity : 0},
        onscreen: { 
            x : 0 , 
            opacity : 1,
            transition : {
                type : "tween",
                duration: 1,
                delay: .2
        }}
    }

    const rightContainerVariants = {
        offscreen : { 
            x : "100px",
            opacity : 0},
        onscreen: { 
            x : 0 , 
            opacity : 1,
            transition : {
                type : "tween",
                duration: 1,
                delay: .2
        }}
    }


    return (
        <>
        <footer className={styles.contactAwesome}>
            <motion.h2 className={styles.contactAwesome__title}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once: true, amount: 0.5}}
                variants={h2Variants}
            >contact <span className={styles.contactAwesome__title___span}>awesome</span></motion.h2>

            <div className={styles.contactAwesome__containerDesktop}>
                <motion.div className={styles.contactAwesome__containerDesktopInput}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={leftContainerVariants}
                >
                    <h3 className={styles.contactAwesome__inputTitle}>name</h3>
                    <input className={styles.contactAwesome__input} type="text" />
                    <h3 className={styles.contactAwesome__inputTitle}>email</h3>
                    <input className={styles.contactAwesome__input} type="text" />
                    <h3 className={styles.contactAwesome__inputTitle}>message</h3>
                    <input className={styles.contactAwesome__input} type="text" />
                    <button className={styles.contactAwesome__button}>Enviar</button>
                </motion.div>

                <motion.div className={styles.contactAwesome__containerDesktopAdress}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={rightContainerVariants}
                >
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
                            <p className={styles.contactAwesome__containerIcon___container____subtitle}>663 New Walk Roadside, Birdeye View, GO </p>
                        </div>
                            <p className={styles.contactAwesome__containerIcon___subtitleNumber}>11020</p>
                    </div>
                    <hr className={styles.contactAwesome__breakline}/>
                    <div className={styles.contactAwesome__socialMediaContainer}>
                        <h3 className={styles.contactAwesome__socialMediaContainer___socialMediaTitle}>we are social</h3>
                        <div className={styles.contactAwesome__socialMediaContainer___containerBox}>
                            <a href="#" className={styles.contactAwesome__socialMediaContainer___container}><FaFacebookF/></a>
                            <a href="#" className={styles.contactAwesome__socialMediaContainer___container}><FaTwitter/></a>
                            <a href="#" className={styles.contactAwesome__socialMediaContainer___container}><FaInstagram/></a>
                        </div>
                    </div>
                    </motion.div>
                </div>

            </footer>
            <div className={styles.copyrightContainer}>
                <motion.p className={styles.copyrightContainer__subtitle}
                    initial={{ scale : 0}}
                    animate={{ scale: [ .3, 1.05 , .9, 1] }}
                    transition={{ duration : 1.5}}
                >Copyright © 2084 Company Name</motion.p>  
            </div>
        
        </>
    )
}

export default ContactAwesome