import { FaLaptop, FaCloud, FaCog } from 'react-icons/fa';
import styles from './OurAwesomeThings.module.scss';
import { motion } from 'framer-motion';

function OurAwesomeThings () {
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

    const containerAwesomeThingsVariants = {
        offscreen: {
            transition: {
                delay : 0
            }
        },
        onscreen : {
            transition: {
                delay : .25
            }
        }
    }

    return (
        <section className={styles._5}>
            <motion.h2 className={styles._5__title}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once: true, amount: 0.5}}
                variants={h2Variants}
            >our <span className={styles._5__title___span}>awesome</span> things</motion.h2>

            <div className={styles._5__containerDesktop}>
                <motion.div className={styles._5__container}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerAwesomeThingsVariants}
                    whileHover={{ 
                        backgroundColor: "#505050",
                }}
                >
                    <div className={styles._5__container___containerIcon}>
                        <FaLaptop className={styles._5__container___containerIcon____icon}/>
                    </div>
                    <h2 className={styles._5__container___title}>Web Design</h2>
                    <p className={styles._5__container___subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
                </motion.div>
                <div className={styles._5__container}>
                    <div className={styles._5__container___containerIcon}>
                        <FaCloud className={styles._5__container___containerIcon____icon}/>
                    </div>
                    <h2 className={styles._5__container___title}>Cloud Computing</h2>
                    <p className={styles._5__container___subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
                </div>
                <motion.div className={styles._5__container}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once: true, amount: 0.5}}
                    variants={containerAwesomeThingsVariants}
                    whileHover={{ 
                        backgroundColor: "#505050",
                }}
                >
                    <div className={styles._5__container___containerIcon}>
                        <FaCog className={styles._5__container___containerIcon____icon}/>
                    </div>
                    <h2 className={styles._5__container___title}>Ux Design</h2>
                    <p className={styles._5__container___subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
                </motion.div>
            </div>

        </section>
    )
}

export default OurAwesomeThings