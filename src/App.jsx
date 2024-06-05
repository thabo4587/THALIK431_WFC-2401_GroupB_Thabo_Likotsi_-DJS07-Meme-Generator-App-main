/**
 * @fileoverview Main application file that sets up and renders the app components.
 */

// Import the CSS file for styling
import "./index.css";

// Import the Header component
import Header from "./Header.jsx";

// Import the Meme component
import Meme from "./Meme.jsx";

/**
 * App component that serves as the root component of the application.
 * 
 * @component
 * @returns {JSX.Element} The rendered JSX content of the App component.
 */
function App() {
  // The component's JSX content is returned
  return (
    // The outer div with the class "App"
    <div className="App">
      {/* Render the Header component */}
      <Header />

      {/* Render the Meme component */}
      <Meme />
    </div>
  );
}

// Export the App component as the default export
export default App;
