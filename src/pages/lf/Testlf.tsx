import React, {Component} from 'react';
import { IonHeader, IonPage, IonToolbar, 
    IonTitle, IonContent, withIonLifeCycle } from '@ionic/react';

class Testlf extends Component {

    // lifecycle - lebih kurang crud la untuk do something dengan data
    // dapatkan data dia dulu
    // pages loading and not loading
    ionViewWillEnter() {
        console.log('ionViewWillEnter event fired');
      }

    // close application - deconstructor
      ionViewWillLeave() {
        console.log('ionViewWillLeave event fired');
      }

    // close application then do something  
      ionViewDidEnter() {
        console.log('ionViewDidEnter event fired');
      }
    
    //   
      ionViewDidLeave() {
        console.log('ionViewDidLeave event fired');
      }

        render(){
            return (
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Testing Lifecycle</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent></IonContent>
                    
                </IonPage>
            )
        }

}

export default Testlf;