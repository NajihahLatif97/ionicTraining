import React from "react";
import {IonAlert, IonButton, IonRouterLink} from '@ionic/react';
import ExploreContainer from "../../components/ExploreContainer";

function Alertexample(){

    return(
        <>
        <IonButton id="present-alert">Click Me</IonButton>
        <IonAlert
            trigger='present-alert'
            header="A Short Message"
            subHeader="A Sub Header"
            message="Hello World!"
            buttons={['OK']}
            >
            </IonAlert>
            <ExploreContainer />
            <IonRouterLink href='/home' routerDirection='forward'>Home</IonRouterLink> <br/>
        </>
    )
}

export default Alertexample;