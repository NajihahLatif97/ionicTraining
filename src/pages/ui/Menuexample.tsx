import { IonButtons,
    IonIcon, IonContent, IonHeader, IonMenu, 
    IonMenuButton, IonPage, IonTitle, IonToolbar, 
    IonRouterLink, IonItem, IonLabel, IonImg 
} from '@ionic/react';

import '../../../public/images/image.css';

function MenuExample() {
  return (
    <>
      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent className="ion-padding">

                <IonItem  routerLink="/contact">
                    <IonLabel>Contact</IonLabel>
                </IonItem>

                <IonItem  routerLink="/about">
                    <IonLabel>About</IonLabel>
                </IonItem> 
                
                <IonItem  routerLink="/db"> 
                    <IonLabel>Database</IonLabel>
                </IonItem> 
                
                <IonItem routerLink="/">
                    <IonLabel>Home</IonLabel>
                </IonItem>

        </IonContent>
      
      </IonMenu>


      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle><IonImg src='../public/images/risda.png' className="ion-imgsizeheader"></IonImg></IonTitle>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonRouterLink href="/" routerDirection='forward'>Home</IonRouterLink>
        <IonContent className="ion-padding">        
            <IonImg src='../public/images/pokokgetah.jpg' className="ion-imgsize" />
        </IonContent>
      </IonPage>
    </>
  );
}
export default MenuExample;