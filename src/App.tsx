import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home'; 
import Contact from './pages/Contact';
import Content from './pages/Content';
import Alertexample from './pages/ui/Alertexample';
import Alertexampletwo from './pages/ui/Alertexampletwo';
import Alertexamplethree from './pages/ui/Alertexamplthree';
import Alertexamplefour from './pages/ui/Alertexamplefour';
import Buttonexample from './pages/ui/Buttonexample';
import Testlf from './pages/lf/Testlf';
import Testswipe from './pages/ui/Testswipe';
import Textscroll from './pages/ui/Textscroll';
import DB from './pages/db/Testdb';
import MenuExample from './pages/ui/Menuexample';
import DBase from './pages/db/DBpage';
import LoginPage from './pages/LoginPage';

/* Core CSS required for Ionic components to work properly - jgn delete*/
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic - jgn delete*/
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out - jgn delete*/
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact(); /** invoke */

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

      <Route exact = {true} path="/login" component={LoginPage}/>
      <Route exact = {true} path="/crud" component={DBase}/>
      <Route exact = {true} path="/menu" component={MenuExample}/>
      <Route exact = {true} path="/db" component={DB}/>
      <Route exact = {true} path="/textscroll" component={Textscroll}/>
        <Route exact = {true} path="/testswipe" component={Testswipe}/>
        <Route exact = {true} path="/content" component={Content}/>
        <Route exact = {true} path="/alertexample" component={Alertexample}/>
        <Route exact = {true} path="/alertexampletwo" component={Alertexampletwo}/>
        <Route exact = {true} path="/alertexamplethree" component={Alertexamplethree}/>
        <Route exact = {true} path="/alertexamplefour" component={Alertexamplefour}/>
        <Redirect exact from ='/b' to ="/buttonexample" />
        
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        {/* <Route exact path="/content">
          <Content />
        </Route>

        <Route exact path="/alertexample">
          <Alertexample />
        </Route>

        <Route exact path="/alertexampletwo">
          <Alertexampletwo />
        </Route>

        <Route exact path="/alertexamplethree">
          <Alertexamplethree />
        </Route>

        <Route exact path="/alertexamplefour">
          <Alertexamplefour />
        </Route> */}

        <Route exact path="/buttonexample">
          <Buttonexample />
        </Route>

        <Route exact path="/lf">
          <Testlf />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
