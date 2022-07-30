import styles from './AwesomePortfolio.module.scss';
import { motion } from 'framer-motion';


function AwesomePortfolio () {
    return (
        <section className={styles._6}>

            <motion.h2 className={styles._6__title}
                initial={{ scale : 0}}
                animate={{ scale: [ .3, 1.05 , .9, 1] }}
                transition={{ duration : 1.5}}
            ><span className={styles._6__title___span}>awesome</span> portofolio</motion.h2>
            
                <motion.div className={styles._6__containerDesktop}
                    initial={{ opacity : 0}}
                    animate={{ opacity : 1}}
                    transition={{ duration : 1 , delay: .5}}
                >
                    <div className={styles._6__img1}>
                        <div className={styles._6__img___containerOverlay}>
                            <h4 className={styles._6__img___containerOverlay____title}>Project One</h4>
                            <p className={styles._6__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles._6__img___containerOverlay____button} href="#">DETAIL</a>
                        </div>
                    </div>
                    <div className={styles._6__img2}>
                        <div className={styles._6__img___containerOverlay}>
                            <h4 className={styles._6__img___containerOverlay____title}>Project Two</h4>
                            <p className={styles._6__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles._6__img___containerOverlay___button} href="#">DETAIL</a>
                        </div>
                    </div>
                    <div className={styles._6__img3}>
                        <div className={styles._6__img___containerOverlay}>
                            <h4 className={styles._6__img___containerOverlay____title}>Project Three</h4>
                            <p className={styles._6__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles._6__img___containerOverlay___button} href="#">DETAIL</a>
                        </div>
                    </div>
                    <div className={styles._6__img4}>
                        <div className={styles._6__img___containerOverlay}>
                            <h4 className={styles._6__img___containerOverlay____title}>Project Four</h4>
                            <p className={styles._6__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles._6__img___containerOverlay___button} href="#">DETAIL</a>
                        </div>
                    </div>
                    <div className={styles._6__img3}>
                        <div className={styles._6__img___containerOverlay}>
                            <h4 className={styles._6__img___containerOverlay____title}>Project Five</h4>
                            <p className={styles._6__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles._6__img___containerOverlay___button} href="#">DETAIL</a>
                        </div>
                    </div>
                    <div className={styles._6__img4}>
                        <div className={styles._6__img___containerOverlay}>
                            <h4 className={styles._6__img___containerOverlay____title}>Project Six</h4>
                            <p className={styles._6__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles._6__img___containerOverlay___button} href="#">DETAIL</a>
                        </div>
                    </div>
                    <div className={styles._6__img2}>
                        <div className={styles._6__img___containerOverlay}>
                            <h4 className={styles._6__img___containerOverlay____title}>Project Seven</h4>
                            <p className={styles._6__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles._6__img___containerOverlay___button} href="#">DETAIL</a>
                        </div>
                    </div>
                    <div className={styles._6__img1}>
                        <div className={styles._6__img___containerOverlay}>
                            <h4 className={styles._6__img___containerOverlay____title}>Project Eight</h4>
                            <p className={styles._6__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles._6__img___containerOverlay___button} href="#">DETAIL</a>
                        </div>
                    </div>
                </motion.div>
            
        </section>
    )
}

export default AwesomePortfolio