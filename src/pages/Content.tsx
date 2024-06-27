import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Content: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Content Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonRouterLink href='/home' routerDirection='forward'>Home</IonRouterLink> <br/>
      </IonContent>
    </IonPage>
  );
};

export default Content;
