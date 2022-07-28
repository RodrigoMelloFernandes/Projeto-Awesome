import styles from './Main.module.scss'

function Main () {
    return (
        <main className={styles._2}>
            <div className={styles._2__containerDesktop}>
                <h2 className={styles._2__title}>We make templates that are <span className={styles._2__title___span}>awesome</span></h2>
                <p className={styles._2__subtitle}>Download, edit and aplly this awesome for yout website</p>
                <button className={styles._2__button}>Get Started</button>
            </div>
        </main>
    )
}

export default Main