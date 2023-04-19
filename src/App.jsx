import './App.css';
import Article from './components/Article';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import JoinUs from './components/JoinUs';
import LearnMore from './components/LearnMore';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Article />
        <LearnMore />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
