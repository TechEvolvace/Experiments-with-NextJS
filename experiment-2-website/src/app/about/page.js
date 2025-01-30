import "./about.css";

export default function About() {
    return (
      <div className="page">
        <div className="content">
          <h1>About page for NextJS Experiment 2 Website!</h1>

          <p>This NextJS Experiment 2 will be a multi-page application written by NextJS!
            To create this multi-page website with NextJS, you first create a new directory
            with a specific name under the src/app directory and then create a page.js file 
            under that new directory! Then you define a new component with content to display 
            for the new page of the website and export it!
          </p>

          <p>
            Right now, there are no navigation links or other UI elements to help intuitively 
            navigate this new website. In order to see the new application, just change the 
            current browser URL from localhost:3000 to localhost:3000/about and press Enter 
            to load the webpage!
          </p>
        </div>
    </div>
  );
}