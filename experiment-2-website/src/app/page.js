import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>NextJS application for Experiment 2!</h1>

        <h2>Goals</h2>
        <ul>
          <li>Implement a Navbar with same design on landing page and the About page</li>
          <li>Add navigation link to route to About page</li>
          <li>Implement unique page styling for landing page and the About page</li>
        </ul>
      </main>
    </div>
  );
}
