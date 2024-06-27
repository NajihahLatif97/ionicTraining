import React from 'react';
import { IonContent, IonPage, IonFabButton, IonIcon, IonAlert, IonFooter, IonToolbar, IonTitle, IonHeader } from '@ionic/react';
import { Swiper, SwiperSlide} from 'swiper/react';
import {trash, camera, heart} from 'ionicons/icons';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

const doTest = (a:string) => {
    alert(a);
    
}

const Testswipe: React.FC = () => {
    var vMsg1:string = "Mike I like you!";
    var vMsg2:string = "Lunch is ready";
    var vMsg3:string = "at 12.45pm";
  return (
    
    <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen={true}>
      <IonAlert trigger='doalert1' message={vMsg1}  buttons={['OK']} />
      <IonAlert trigger='doalert2' message={vMsg2}  buttons={['OK']} />
      <IonAlert trigger='doalert3' message={vMsg3}  buttons={['OK']} />

        <Swiper slidesPerView={1} loop={true} >
          <SwiperSlide>
            <IonFabButton id="doalert1" >
                <IonIcon icon={trash}></IonIcon>
            </IonFabButton>
          </SwiperSlide>
          <SwiperSlide>            
            <IonFabButton  id="doalert2" >
                <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
            </SwiperSlide>
          <SwiperSlide>
            <IonFabButton  id="doalert3" >
                <IonIcon icon={heart}></IonIcon>
            </IonFabButton>
          </SwiperSlide>
        </Swiper>

      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
export default Testswipe;