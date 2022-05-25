import { BarChartRounded, DashboardRounded, TocRounded } from '@material-ui/icons';
import './App.css';
import Item from './Component/Item';

function App() {
  return (
    <div className="App">
      <div className="sidebar_container">
        <div className="sidebar">
          {/* lines_icon */}
          <div className="lines_icon">
            <TocRounded/>
          </div>
          {/* profile */}
          <div className="profile">
            <img src="https://ae01.alicdn.com/kf/H5be6a0fa5f584a8a8420da2a7d4bc809r/RBRARE-Polaroid-Men-s-Goggle-Driving-Sunglasses-Men-Classic-Low-Profile-Sun-Glasses-For-Men-High.jpg" alt='profile_img'/>
          </div>
          {/* groups */}
          <div className="groups">
            <div className="group">
              <h3>ANALYTICS</h3>
              <Item icon={<DashboardRounded/>}
              name='Dashboard'/><Item icon={<BarChartRounded/>}
              name='Performance'/>
            </div>
          </div>
        </div> 
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <div className='body_container'> I AM BODY
        {/* <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body */}
        </div>
    </div>
  );
}

export default App;
