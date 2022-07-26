import { FaMobileAlt, FaRegComment, FaHtml5 } from 'react-icons/fa';
import styles from './WeAreAwesome.module.scss';

function WeAreAwesome () {
    return (
        <section className={styles.WeAreAwesome}>
            <h2 className={styles.WeAreAwesome__title}>We are <span className={styles.WeAreAwesome__title___span}>Awesome</span></h2>

            <div className={styles.WeAreAwesome__container}>
                <div className={styles.WeAreAwesome__container___containerIcon}>
                    <FaMobileAlt/>
                </div>
                <div className={styles.WeAreAwesome__container___content}>
                    <h2 className={styles.WeAreAwesome__container___content____title}>fully responsive</h2>
                    <p className={styles.WeAreAwesome__container___content____subtitle}>Awesome responsive template is provided by <a href="">templatemo</a> website. This is Bootstrap v3.3.2 layout built on HTML5 CSS3. You can use this for any purpose. Please tell your friends about it.</p>
                </div>
            </div>

            <div className={styles.WeAreAwesome__container}>
                <div className={styles.WeAreAwesome__container___containerIcon}>
                    <FaRegComment/>
                </div>
                <div className={styles.WeAreAwesome__container___content}>
                    <h2 className={styles.WeAreAwesome__container___content____title}>free support</h2>
                    <p className={styles.WeAreAwesome__container___content____subtitle}>Credits go to <a href="#">Pixabay</a> for homepage image and <a href="#">Unsplash</a> for portfolio images. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
                </div>
            </div>

            <div className={styles.WeAreAwesome__container}>
                <div className={styles.WeAreAwesome__container___containerIcon}>
                    <FaHtml5/>
                </div>
                <div className={styles.WeAreAwesome__container___content}>
                    <h2 className={styles.WeAreAwesome__container___content____title}>HTML5 &amp; CSS3</h2>
                    <p className={styles.WeAreAwesome__container___content____subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

        </section>
    )
}

export default WeAreAwesome