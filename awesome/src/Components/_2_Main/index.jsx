import styles from './_2_.module.scss';
import { motion } from 'framer-motion';
 
function Main () {
    
    return (
        <main className={styles.main}>
            <div className={styles.main__containerDesktop}>
                <motion.h2 className={styles.main__title}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ delay: .8 , duration: 1 }}
                >We make templates that are <span className={styles.main__title___span}>awesome</span></motion.h2>

                <p className={styles.main__subtitle}>Download, edit and aplly this awesome for your website</p>
                <motion.button className={styles.main__button}
                    initial={{ y : 25 , opacity: 0}}
                    animate={{ y : 0 , opacity: 1 }}
                    transition={{ delay: .5 }}
                >Get Started</motion.button>
            </div>
        </main>
    )
}




export default Main