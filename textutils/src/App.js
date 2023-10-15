import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" about="About Us"/>
    <div className="container my-3">
    <TextForm heading="Enter the text below to analyze"/>
    </div>

    </>
  );
}

export default App;
