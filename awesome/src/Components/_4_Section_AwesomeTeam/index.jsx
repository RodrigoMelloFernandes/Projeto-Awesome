import teamimg1 from '../../Images/team-img1.jpg';
import teamimg2 from '../../Images/team-img2.jpg';
import teamimg3 from '../../Images/team-img3.jpg';
import teamimg4 from '../../Images/team-img4.jpg';
import styles from './_4_.module.scss';
import { motion } from 'framer-motion';

function AwesomeTeam () {
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

    const containerOneAndThreeVariants = {
        offscreen : {
            opacity : 0
        },
        onscreen : {
            opacity : 1,
            transition : {
                type : "tween",
                duration : 1,
                delay: 1.6
            }
        }
    }

    const containerTwoAndFourVariants = {
        offscreen : {
            opacity : 0
        },
        onscreen : {
            opacity : 1,
            transition : {
                type : "tween",
                duration : 1,
                delay: 1.4
            }
        }
    }

    return(
        <section className={styles.awesomeTeam}>
            <motion.h2 
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once: true, amount: 0.5}}
                variants={h2Variants}

            className={styles.awesomeTeam__title}><span className={styles.awesomeTeam__title___span}>awesome</span> team</motion.h2>

            <div className={styles.awesomeTeam__containerDesktop}>
                <motion.div className={styles.awesomeTeam__container}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerOneAndThreeVariants}
                    whileHover={{ opacity: .3, transition: 1, y : -5}}
                >
                    <img className={styles.awesomeTeam__container___img} src={teamimg1} alt="teamimg1" />
                    <h2 className={styles.awesomeTeam__container___title}>tracy</h2>
                    <h3 className={styles.awesomeTeam__container___subtitle}>Designer</h3>
                    <p className={styles.awesomeTeam__container___content}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
                </motion.div>
                <motion.div className={styles.awesomeTeam__container}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerTwoAndFourVariants}
                    whileHover={{ opacity: .3, transition: 1, y : -5}}
                >
                    <img className={styles.awesomeTeam__container___img} src={teamimg2} alt="teamimg2" />
                    <h2 className={styles.awesomeTeam__container___title}>mary</h2>
                    <h3 className={styles.awesomeTeam__container___subtitle}>Developer</h3>
                    <p className={styles.awesomeTeam__container___content}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
                </motion.div>
                <motion.div className={styles.awesomeTeam__container}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerOneAndThreeVariants}
                    whileHover={{ opacity: .3, transition: 1, y : -5}}
                >
                    <img className={styles.awesomeTeam__container___img} src={teamimg3} alt="teamimg3" />
                    <h2 className={styles.awesomeTeam__container___title}>julia</h2>
                    <h3 className={styles.awesomeTeam__container___subtitle}>Director</h3>
                    <p className={styles.awesomeTeam__container___content}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
                </motion.div>
                <motion.div className={styles.awesomeTeam__container}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerTwoAndFourVariants}
                    whileHover={{ opacity: .3, transition: 1, y : -5}}
                >
                    <img className={styles.awesomeTeam__container___img} src={teamimg4} alt="teamimg4" />
                    <h2 className={styles.awesomeTeam__container___title}>linda</h2>
                    <h3 className={styles.awesomeTeam__container___subtitle}>Manager</h3>
                    <p className={styles.awesomeTeam__container___content}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
                </motion.div>
            </div>
        </section>
    )
}

export default AwesomeTeam