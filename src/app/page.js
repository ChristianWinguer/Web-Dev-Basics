import styles from "./page.module.css";
import Image from "next/image";

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
      <img src="/icons/css-icon.svg" alt="HTML Icon" width={90} height={90} />
      <img src="/icons/javascript-icon.svg" alt="HTML Icon" width={90} height={90} />
      <img src="/icons/git-icon.svg" alt="HTML Icon" width={90} height={90} />
      <img src="/icons/nextJS-icon.svg" alt="HTML Icon" width={90} height={90} />
      </section>
    </div>
  );
}
