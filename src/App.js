
import './App.css';
import Navbar from './components/navbar/Navbar';
import Body1 from './components/body1/Body1';
import Body2 from './components/body2/Body2';
import Body3 from './components/body3/Body3';
import Body4 from './components/body4/Body4'
import Body5 from './components/body5/Body5';
import Body6 from './components/body6/Body6';
import Footer6 from './components/footer6/Footer6';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='body'>
        <Body1 />
        <Body2 />
      </div>
      <Body3 />
      <Body4 />
      <Body5 />
      <Body6 />
      <Footer6 />
     
     </div>
  );
}

export default App;
