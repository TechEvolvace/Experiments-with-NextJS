/* 
  This is the landing page component! 
*/

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h1 className={styles.pageTitle}>NextJS Experiment 1 Successfully Created with NextJS</h1>

        <p>This first NextJS experiment is created to identify 
          the files from the starter code files provided by NodeJS that is needed to run a NodeJS project. 
        </p>

        <h2>Findings</h2>
        <p>It appears that NextJS follows the Components architecture and styling similar to React&apos;s Components!</p>
        <p>The components in NextJS are still exported as modules similar to with React</p>
        <p>The <code>page.modules.css</code> file is responsible for styling this landing page&apos;s appearance!</p>

        <h2>Components present in the landing page that NextJS provides by default when creating a new NextJS project!</h2>
        <ul>
          <li>NextJS Logo Image</li>
          <li>Some starting instructions for getting started with NextJS in an ordered list</li>
          <li>Functional button to deploy a NextJS project; Labeled as Deploy Now</li>
          <li>Functional button to see NextJS documentation; Labeeld as Read our docs</li>
          <li>3 hyperlinks labeled Learn, Examples, and Go to nextjs.org → all in the landing page&apos;s footer</li>
          <li>Icon of document (which is an Image) for Learn hyperlink</li>
          <li>Icon of a Window (which is an Image) for Examples hyperlink</li>
          <li>Icon of a globe (which is an image) for the Go to nextjs.org → hyperlink</li>
        </ul>
      </main>
    </div>
  );
}
