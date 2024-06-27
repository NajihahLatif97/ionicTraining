import React from 'react';
import {IonButton, IonFabButton, IonIcon} from '@ionic/react';
import {trash} from 'ionicons/icons';

function doTest(a:string){
    alert(a);
}

// const doTest(a:string) => {
//     alert(a);
// }

function Buttonexample(){

    // var x:string; {type script}
    // var x:number;

    return(
        <div>
        <IonButton id="doalert" onClick={() => doTest('Testing Alert JavaScript') } >Click Me</IonButton>
        <br />
        <IonButton id="doalert" onClick={() => doTest('Wow!') } >Click Me 2</IonButton>

        <IonFabButton color='danger' onClick={() => doTest('Testing')} >

        </IonFabButton>

        <IonFabButton  onClick={() => doTest('Delete')} >
            <IonIcon icon={trash}></IonIcon>
        </IonFabButton>
        </div>
    )

}

export default Buttonexample;
