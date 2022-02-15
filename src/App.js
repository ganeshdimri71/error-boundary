import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div className="App">
      {/* We are wrapping each and every component with the ErrorBoundary because it is not ideal to hide the other component if there is a error in any one component */ }
      <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
