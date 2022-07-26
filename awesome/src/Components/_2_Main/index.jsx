import styles from './Main.module.scss'

function Main () {
    return (
        <main className={styles.main}>
            <h2 className={styles.main__title}>We Make templates that are <span className={styles.main__title___span}>awesome</span></h2>
            <p className={styles.main__subtitle}>Download, edit and aplly this awesome for yout website</p>

            <button className={styles.main__button}>Get Started</button>
        </main>
    )
}

export default Main