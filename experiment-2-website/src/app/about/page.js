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

          <h2>My Findings</h2>
          <p>In order to achieve making the entire About page&apos;s background a specific background color, 
            I had to define a div tag with the class page to encompass all other content in the About page. 
            That will be the root tag for the About page&apos;s other elements. 
            Then, I set the margin and padding to 0 and have the height and width encompass the entire viewport of the About page! 
            This will ensure that this root div tag will encompass the entire About page, and modifying the background-color property to a specific color
            will transform the entire background of the About page to that color.
          </p>

          <p>
            I found that you can&apos;t set linear gradients to the background-color property, but you can set that to 
            the background-image property.
          </p>
        </div>
    </div>
  );
}