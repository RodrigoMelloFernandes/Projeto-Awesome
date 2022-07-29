import styles from './AwesomePortfolio.module.scss'


function AwesomePortfolio () {
    return (
        <section className={styles._6}>

            <h2 className={styles._6__title}><span className={styles._6__title___span}>awesome</span> portofolio</h2>
            
                <div className={styles._6__containerDesktop}>
                    <div className={styles._6__img1}></div>
                    <div className={styles._6__img2}></div>
                    <div className={styles._6__img3}></div>
                    <div className={styles._6__img4}></div>
                    <div className={styles._6__img3}></div>
                    <div className={styles._6__img4}></div>
                    <div className={styles._6__img2}></div>
                    <div className={styles._6__img1}></div>
                </div>
            
        </section>
    )
}

export default AwesomePortfolio