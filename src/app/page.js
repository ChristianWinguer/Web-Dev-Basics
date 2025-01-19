import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <section className={styles.aboutProjectSection}>
          <h1>About the project</h1>
          <p>
            This project is a responsive and modern website that I developed as
            a Computer Science student passionate about web development. My goal
            with this project is to consolidate my knowledge in building web
            applications using Next.js, while also strengthening my foundation
            in programming logic and algorithms. This hands-on experience allows
            me to apply key concepts and best practices in modern web
            development, preparing me for future challenges in the field.
          </p>
      </section>
      <section className={styles.techStackSection}>
      <img src="/icons/html-icon.svg" alt="HTML Icon" width={90} height={90} />
      <img src="/icons/css-icon.svg" alt="CSS Icon" width={90} height={90} />
      <img src="/icons/javascript-icon.svg" alt="JavaScript Icon" width={90} height={90} />
      <img src="/icons/git-icon.svg" alt="Git Icon" width={90} height={90} />
      <img src="/icons/nextJS-icon.svg" alt="NextJS Icon" width={90} height={90} />
      </section>
      <main className={styles.sectionExercices}>
        <a href="/" className={styles.exerciceCard}>
          <div>
            <img src="/images/template.png" alt="Exercice Thumbnail" width={500} height={250} />
          </div>
          <div className={styles.exerciceCardDescription}>
           <h2>Password Generator</h2>
           <p>Pequena descrição</p>
          </div>
        </a>
        <a href="/" className={styles.exerciceCard}>
          <div>
            <img src="/images/template.png" alt="Exercice Thumbnail" width={500} height={250} />
          </div>
          <div className={styles.exerciceCardDescription}>
           <h2>Password Generator</h2>
           <p>Pequena descrição</p>
          </div>
        </a>
        <a href="/" className={styles.exerciceCard}>
          <div>
            <img src="/images/template.png" alt="Exercice Thumbnail" width={500} height={250} />
          </div>
          <div className={styles.exerciceCardDescription}>
           <h2>Password Generator</h2>
           <p>Pequena descrição</p>
          </div>
        </a>
        <a href="/" className={styles.exerciceCard}>
          <div>
            <img src="/images/template.png" alt="Exercice Thumbnail" width={500} height={250} />
          </div>
          <div className={styles.exerciceCardDescription}>
           <h2>Password Generator</h2>
           <p>Pequena descrição</p>
          </div>
        </a>
        <a href="/" className={styles.exerciceCard}>
          <div>
            <img src="/images/template.png" alt="Exercice Thumbnail" width={500} height={250} />
          </div>
          <div className={styles.exerciceCardDescription}>
           <h2>Password Generator</h2>
           <p>Pequena descrição</p>
          </div>
        </a>
        <a href="/" className={styles.exerciceCard}>
          <div>
            <img src="/images/template.png" alt="Exercice Thumbnail" width={500} height={250} />
          </div>
          <div className={styles.exerciceCardDescription}>
           <h2>Password Generator</h2>
           <p>Pequena descrição</p>
          </div>
        </a>
      </main>
    </div>
  );
}
