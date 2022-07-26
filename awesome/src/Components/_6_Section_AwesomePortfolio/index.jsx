import styles from './_6_.module.scss';
import { motion } from 'framer-motion';


function AwesomePortfolio () {
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


    const containerChildrenVariants = {
        offscreen : {
            opacity : 0
        },
        onscreen : {
            opacity : 1,
            transition : {
                type : "bounce",
                duration : 1,
                delay: 1.6
            }
        }
    }


    return (
        <section className={styles.awesomePortfolio}>

            <motion.h2 className={styles.awesomePortfolio__title}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once: true, amount: 0.5}}
                variants={h2Variants}
            ><span className={styles.awesomePortfolio__title___span}>awesome</span> portofolio</motion.h2>
            
                <div className={styles.awesomePortfolio__containerDesktop}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerChildrenVariants}
                >
                    <motion.div className={styles.awesomePortfolio__img1}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerChildrenVariants}
                    >
                        <div className={styles.awesomePortfolio__img___containerOverlay}>
                            <h4 className={styles.awesomePortfolio__img___containerOverlay____title}>Project One</h4>
                            <p className={styles.awesomePortfolio__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles.awesomePortfolio__img___containerOverlay____button} href="#">DETAIL</a>
                        </div>
                    </motion.div>
                    <motion.div className={styles.awesomePortfolio__img2}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerChildrenVariants}
                    >
                        <div className={styles.awesomePortfolio__img___containerOverlay}>
                            <h4 className={styles.awesomePortfolio__img___containerOverlay____title}>Project Two</h4>
                            <p className={styles.awesomePortfolio__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles.awesomePortfolio__img___containerOverlay____button} href="#">DETAIL</a>
                        </div>
                    </motion.div>
                    <motion.div className={styles.awesomePortfolio__img3}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerChildrenVariants}
                    >
                        <div className={styles.awesomePortfolio__img___containerOverlay}>
                            <h4 className={styles.awesomePortfolio__img___containerOverlay____title}>Project Three</h4>
                            <p className={styles.awesomePortfolio__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles.awesomePortfolio__img___containerOverlay____button} href="#">DETAIL</a>
                        </div>
                    </motion.div>
                    <motion.div className={styles.awesomePortfolio__img4}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerChildrenVariants}
                    >
                        <div className={styles.awesomePortfolio__img___containerOverlay}>
                            <h4 className={styles.awesomePortfolio__img___containerOverlay____title}>Project Four</h4>
                            <p className={styles.awesomePortfolio__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles.awesomePortfolio__img___containerOverlay____button} href="#">DETAIL</a>
                        </div>
                    </motion.div>
                    <motion.div className={styles.awesomePortfolio__img3}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerChildrenVariants}
                    >
                        <div className={styles.awesomePortfolio__img___containerOverlay}>
                            <h4 className={styles.awesomePortfolio__img___containerOverlay____title}>Project Five</h4>
                            <p className={styles.awesomePortfolio__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles.awesomePortfolio__img___containerOverlay____button} href="#">DETAIL</a>
                        </div>
                    </motion.div>
                    <motion.div className={styles.awesomePortfolio__img4}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerChildrenVariants}
                    >
                        <div className={styles.awesomePortfolio__img___containerOverlay}>
                            <h4 className={styles.awesomePortfolio__img___containerOverlay____title}>Project Six</h4>
                            <p className={styles.awesomePortfolio__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles.awesomePortfolio__img___containerOverlay____button} href="#">DETAIL</a>
                        </div>
                    </motion.div>
                    <motion.div className={styles.awesomePortfolio__img2}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerChildrenVariants}
                    >
                        <div className={styles.awesomePortfolio__img___containerOverlay}>
                            <h4 className={styles.awesomePortfolio__img___containerOverlay____title}>Project Seven</h4>
                            <p className={styles.awesomePortfolio__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles.awesomePortfolio__img___containerOverlay____button} href="#">DETAIL</a>
                        </div>
                    </motion.div>
                    <motion.div className={styles.awesomePortfolio__img1}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerChildrenVariants}
                    >
                        <div className={styles.awesomePortfolio__img___containerOverlay}>
                            <h4 className={styles.awesomePortfolio__img___containerOverlay____title}>Project Eight</h4>
                            <p className={styles.awesomePortfolio__img___containerOverlay____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                            <a className={styles.awesomePortfolio__img___containerOverlay____button} href="#">DETAIL</a>
                        </div>
                    </motion.div>
                </div>
            
        </section>
    )
}

export default AwesomePortfolio