import {
 
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
 
  IonButtons,
  IonBackButton,

} from "@ionic/react";
import React, {  } from "react";


// function ProgressReport() {
//     return (
//                 <IonPage>
//                 <IonHeader>
//                     <IonToolbar>
//                         <IonButtons slot="start"><IonBackButton/></IonButtons>
//                         <IonTitle>Mango Chart</IonTitle>
//                     </IonToolbar>
//                 </IonHeader>
//                 <IonContent className="ion-padding">
//                 <h2>Work Hours Gained</h2>
//                 <MangoChart startDay={10} endDay={10} size={10} />
//                 </IonContent>
//             </IonPage>
//             )
//         };

function ProgressReport() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Mango Chart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
       {/*  <h2>Work Hours Gained</h2> */}

        <h1>under construction</h1>
     
      </IonContent>
    </IonPage>
  );
}

export default ProgressReport;
