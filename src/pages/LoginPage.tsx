
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonList,
  IonItem,
  IonInput
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import axios from "axios";



function doLogin(userid:any, password:any) {
      
      const userdata = {
          vuserid:userid,
          vpass:password
      }
      axios.post('https://www.vigshakri.com/ionicdatabase/authenticate.php',{userdata})
          .then((response) => {

          if(response.data[0]["nor"] == "1"){
            const x = "yes";
             alert(x);  
          }else{
              alert("no");
          }
         
      })
  }

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {

  const [user, setUser] = useState([]);
  const [pass, setPass] = useState([]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login Page {""}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent> 

      <IonList>
          <IonItem>
                  <IonInput
                      required
                      type="text"
                      name="userid"
                      onIonChange={(e:any) => setUser(e.target.value)}
                      placeholder="Enter user id">
                  </IonInput>
          </IonItem>
          <IonItem>
                  <IonInput
                      required
                      type="password"
                       name="username"
                      onIonChange={(e: any) => setPass(e.target.value)}
                      placeholder="Enter Password">
                  </IonInput>
          </IonItem>
      </IonList>
      <IonButton  onClick={async () => { 
              doLogin(user,pass) ;
             // history.replace("/"); 
          }}
      >
          LOGIN
      </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;