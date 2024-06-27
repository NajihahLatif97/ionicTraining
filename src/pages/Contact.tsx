import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonRouterLink href='/home' routerDirection='forward'>Home</IonRouterLink> <br/>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
