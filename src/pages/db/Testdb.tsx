import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';


function doGetData(){

    //amik data  - lifecycle  
    axios.get('https://www.vigshakri.com/ionicdatabase/fetchdata.php')
    .then((response) => {
        console.log(response.data);
    }) 
}
const DB: React.FC = () => {

    // 
    useEffect(() =>{
      
        axios.get('https://www.vigshakri.com/ionicdatabase/fetchdata.php')
        .then((response) => {
            console.log(response.data);
        })

    },[]);

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Get Data From API</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <IonButton id="dogetdata" onClick={() => doGetData() } >Get Data from API</IonButton>

            </IonContent>
        </IonPage>
    )
}

export default DB;