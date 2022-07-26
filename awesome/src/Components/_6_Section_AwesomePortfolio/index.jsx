import styles from './AwesomePortfolio.module.scss'

function AwesomePortfolio () {
    return (
        <section className={styles.awesomeportfolio}>

            <h2 className={styles.awesomeportfolio__title}><span className={styles.awesomeportfolio__title___span}>awesome</span> portofolio</h2>
            
            <div className={styles.img1}></div>
            <div className={styles.img2}></div>
            <div className={styles.img3}></div>
            <div className={styles.img4}></div>

            <div className={styles.img3}></div>
            <div className={styles.img4}></div>
            <div className={styles.img2}></div>
            <div className={styles.img1}></div>
        </section>
    )
}

export default AwesomePortfolio