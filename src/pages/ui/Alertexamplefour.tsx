import React from 'react';
import {IonAlert, IonButton} from '@ionic/react';

const Alertexamplefour: React.FC = () => {
    
    var doMessage = () => {
        return "Simple Message wow";
    }

    var doOK = () =>{
        console.log('Alert Confirm!!!')
    }

    var doCancel = () =>{
        console.log('Alert Canceled!')
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
                    doCancel(); // Call the cancel function
                }
            },
            {
                text:'OK',
                role:'confirm',
                handler:() => {
                    doOK(); // Call OK function
                }
            }
            ]}
            onDidDismiss={({detail}) => console.log( doMessage()) }
        >
        </IonAlert>
        </>
    )

}

export default Alertexamplefour;