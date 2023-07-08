import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import Feeds from "feeds-mf/Feeds";
// const Profile = React.lazy(() => import('profile-mf/Profile'));

import "./index.css";

const App = () => (

  <div>
   
        <div style={{
          margin:"10px",
          padding:"10px",
          textAlign:"center",
          backgroundColor:"greenyellow"
        }}>
            <div style={{ fontSize: '40px'}}>
              DevConnect
            </div>

            <div style={{ fontSize: '24px'}}>
              A social media for developers attending different conferences!
            </div>
            
        </div>
   
      <main  style={{ width: '50%', margin: 'auto' }}>
        <Feeds />
      </main>
      
  </div>

    
  
);
ReactDOM.render(<App />, document.getElementById("app"));
