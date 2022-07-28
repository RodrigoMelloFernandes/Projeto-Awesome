import { FaLaptop, FaCloud, FaCog } from 'react-icons/fa'
import styles from './OurAwesomeThings.module.scss'

function OurAwesomeThings () {
    return (
        <section className={styles.o}>
            <h2 className={styles.o__title}>our <span className={styles.o__title___span}>awesome</span> things</h2>

            <div className={styles.o__container}>
                <div className={styles.o__container___containerIcon}>
                    <FaLaptop className={styles.o__container___containerIcon____icon}/>
                </div>
                <h2 className={styles.o__container___title}>Web Design</h2>
                <p className={styles.o__container___subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
            </div>

            <div className={styles.o__container}>
                <div className={styles.o__container___containerIcon}>
                    <FaCloud className={styles.o__container___containerIcon____icon}/>
                </div>
                <h2 className={styles.o__container___title}>Cloud Computing</h2>
                <p className={styles.o__container___subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
            </div>

            <div className={styles.o__container}>
                <div className={styles.o__container___containerIcon}>
                    <FaCog className={styles.o__container___containerIcon____icon}/>
                </div>
                <h2 className={styles.o__container___title}>Ux Design</h2>
                <p className={styles.o__container___subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
            </div>

        </section>
    )
}

export default OurAwesomeThings