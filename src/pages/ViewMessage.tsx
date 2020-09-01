import React, { useState } from 'react';
import { getMessage } from '../data/messages';
import { Item } from "rss-parser";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import './ViewMessage.css';
import { exitOutline } from 'ionicons/icons';

interface ViewMessageProps extends RouteComponentProps<{ id: string; }> { }

const ViewMessage: React.FC<ViewMessageProps> = ({ match }) => {

  const [message, setMessage] = useState<Item>();

  useIonViewWillEnter(async () => {
    const msg = await getMessage(match.params.id);
    setMessage(msg);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton href={message?.link || "#"} target="_blank">
              <IonIcon slot="icon-only" ios={exitOutline} md={exitOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {message ? (
          <>
            <div className="ion-padding">
              <IonNote>{message.pubDate}</IonNote>
              <h1>{message.title}</h1>
              <p>
                {message["content:encodedSnippet"]}
              </p>
            </div>
          </>
        ) : <div>Loading</div>}
      </IonContent>
    </IonPage>
  );
};

export default ViewMessage;
