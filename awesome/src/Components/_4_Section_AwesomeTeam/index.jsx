import teamimg1 from '../../Images/team-img1.jpg';
import teamimg2 from '../../Images/team-img2.jpg';
import teamimg3 from '../../Images/team-img3.jpg';
import teamimg4 from '../../Images/team-img4.jpg';
import styles from './AwesomeTeam.module.scss';

function AwesomeTeam () {
    return(
        <section className={styles._4}>
            <h2 className={styles._4__title}><span className={styles._4__title___span}>awesome</span> team</h2>

            <div className={styles._4__containerDesktop}>
                <div className={styles._4__container}>
                    <img className={styles._4__container___img} src={teamimg1} alt="teamimg1" />
                    <h2 className={styles._4__container___title}>tracy</h2>
                    <h3 className={styles._4__container___subtitle}>Designer</h3>
                    <p className={styles._4__container___content}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
                </div>
                <div className={styles._4__container}>
                    <img className={styles._4__container___img} src={teamimg2} alt="teamimg2" />
                    <h2 className={styles._4__container___title}>mary</h2>
                    <h3 className={styles._4__container___subtitle}>Developer</h3>
                    <p className={styles._4__container___content}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
                </div>
                <div className={styles._4__container}>
                    <img className={styles._4__container___img} src={teamimg3} alt="teamimg3" />
                    <h2 className={styles._4__container___title}>julia</h2>
                    <h3 className={styles._4__container___subtitle}>Director</h3>
                    <p className={styles._4__container___content}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
                </div>
                <div className={styles._4__container}>
                    <img className={styles._4__container___img} src={teamimg4} alt="teamimg4" />
                    <h2 className={styles._4__container___title}>linda</h2>
                    <h3 className={styles._4__container___subtitle}>Manager</h3>
                    <p className={styles._4__container___content}>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
                </div>
            </div>
        </section>
    )
}

export default AwesomeTeam