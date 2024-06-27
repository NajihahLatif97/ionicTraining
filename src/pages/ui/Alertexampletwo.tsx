import React from 'react';
import {IonAlert, IonButton} from '@ionic/react';

const Alertexampletwo: React.FC = () => {
    
    var doMessage = () => {
        return "Simple Message wow";
    }

    return(
        <>
        <IonButton id="present-alert">Click Me</IonButton>
        <IonAlert
            trigger='present-alert'
            header="A Short Message"
            buttons={
            [
            {
                text:'Cancel',
                role:'cancel',
                handler:() => {
                    console.log('Alert Canceled!')
                }
            },
            {
                text:'OK',
                role:'confirm',
                handler:() => {
                    console.log('Alert Confirm!!!')
                }
            }
            ]}
            onDidDismiss={({detail}) => console.log( doMessage()) }
        >
        </IonAlert>
        </>
    )

}

export default Alertexampletwo;