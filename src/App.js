import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import MyNav from './components/MyNav';
import Header from './components/Header';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <BackToTop />
      <div className='section_bg'>
        <MyNav />
        <Header />
      </div>
      <Contact />
    </>
  );
}

export default App;
