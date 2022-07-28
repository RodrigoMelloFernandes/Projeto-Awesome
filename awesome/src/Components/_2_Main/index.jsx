import styles from './Main.module.scss'

function Main () {
    return (
        <main className={styles.m}>
            <h2 className={styles.m__title}>We Make templates that are <span className={styles.m__title___span}>awesome</span></h2>
            <p className={styles.m__subtitle}>Download, edit and aplly this awesome for yout website</p>

            <button className={styles.m__button}>Get Started</button>
        </main>
    )
}

export default Main