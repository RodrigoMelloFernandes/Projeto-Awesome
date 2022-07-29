import styles from './Main.module.scss';
import { motion } from 'framer-motion'
 
function Main () {
    
    return (
        <main className={styles._2}>
            <div className={styles._2__containerDesktop}>
                <motion.h2
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ delay: .8 , duration: 1 }}
                >
                <h2 className={styles._2__title}>We make templates that are <span className={styles._2__title___span}>awesome</span></h2>
                </motion.h2>

                <p className={styles._2__subtitle}>Download, edit and aplly this awesome for yout website</p>
                <button className={styles._2__button}>Get Started</button>
            </div>
        </main>
    )
}




export default Main