import './App.css';
import Header from './componets/header/Header';
import WaBanner from './componets/MainBanner';
import Footer from './componets/footer/Footer';
import Range from './componets/range-bar/RangeBar';
import TwoBlock from './componets/two-blocks/TwoBlocks'
import ThreeBlock from './componets/three-blocks/ThreeBlocks'
import Awards from './componets/img/award.jpg';


function App() {
  return (
    <>
      <div className='container'>
        <Header hd_info='test details' ft_info='footer test details...... ' />
        <WaBanner />
        <Range />
        <TwoBlock />
        <div className='award'><h2>Australia’s most awarded pool company</h2><img src={Awards} alt="Australia’s most awarded pool company" /></div>
        <ThreeBlock />
      </div>

      <Footer />
    </>

  );
}

export default App;
