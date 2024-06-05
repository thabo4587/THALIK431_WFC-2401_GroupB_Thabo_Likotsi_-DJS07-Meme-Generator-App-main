/**
 * @fileoverview Header component for the Meme Generator application.
 */

// Import the CSS file for styling
import "./index.css";

/**
 * Header component that displays the header section of the Meme Generator application.
 * 
 * @component
 * @returns {JSX.Element} The rendered JSX content of the Header component.
 */
export default function Header() {
  // The component's JSX content is returned
  return (
    // The header element with the class "header"
    <header className="header">
      {/* An img element for the header image */}
      <img src="./image/memeza.jpg" className="header--image" />

      {/* An h2 element for the header title */}
      <h2 className="header--title">Meme Generator</h2>

      {/* An h4 element for the project name */}
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
