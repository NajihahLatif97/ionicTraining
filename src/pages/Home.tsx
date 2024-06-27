import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello World</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer />
        <IonRouterLink href='/menu' routerDirection='forward'>Menu Example</IonRouterLink> <br/>
        <IonRouterLink href='/contact' routerDirection='forward'>Contact</IonRouterLink> <br/>
        <IonRouterLink href='/content' routerDirection='forward'>Content</IonRouterLink> <br/>
        <IonRouterLink href='/textscroll' routerDirection='forward'>Text Scroll</IonRouterLink> <br/>
        <IonRouterLink href='/alertexample' routerDirection='forward'>Alert Example</IonRouterLink> <br/>
        {/* <IonRouterLink href='/contact' routerDirection='forward'>Contact</IonRouterLink> <br/> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
