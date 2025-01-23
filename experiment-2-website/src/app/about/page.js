import styles from "../page.module.css";

export default function About() {
    return (
      <div className={styles.page}>
          <h1>About page for NextJS Experiment 2 Website!</h1>

          <br></br>
          <p>This NextJS Experiment 2 will be a multi-page application written by NextJS!
            To create this multi-page website with NextJS, you first create a new directory
            with a specific name under the src/app directory and then create a page.js file 
            under that new directory! Then you define a new component with content to display 
            for the new page of the website and export it!
          </p>

          <br></br>
          <p>
            In order to see the new application, just change the current browser URL 
            from localhost:3000 to localhost:3000/about and press Enter to load the webpage!
          </p>
      </div>
    );
}