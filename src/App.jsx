import './App.css';
import Navbar from './components/Navbar.jsx';
import PageHome from './pages/PageHome.jsx';
import Pageabout_us from './pages/Pageabout_us.jsx';
import PageTechnology from './pages/PageTechnology.jsx';
import PageBuild from './pages/PageBuild.jsx';
import PageContact from './pages/PageContact.jsx';
import PageFooter from './pages/PageFooter.jsx';

function App() {
  

  return (
    <div className='min-h-screen bg-[#302C42] font-montserrat'>
      <Navbar />
      <PageHome />
      <Pageabout_us />
      <PageTechnology />
      <PageBuild />
      <PageContact />
      <PageFooter />
    </div>
  )
}

export default App
