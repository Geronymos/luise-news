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
  IonFab,
  IonFabButton,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import './ViewMessage.css';
import { exitOutline, shareSocialOutline } from 'ionicons/icons';

import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

const share = async ({ title, contentSnippet: text, link: url }: Item) => await Share.share({ title, text, url, dialogTitle: 'Teile mit deinen Mitschülern' });

interface ViewMessageProps extends RouteComponentProps<{ id: string; }> { }

const ViewMessage: React.FC<ViewMessageProps> = ({ match }) => {

  const [message, setMessage] = useState<any>();

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
              <IonIcon slot="icon-only" icon={exitOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => message && share(message)}>
            <IonIcon icon={shareSocialOutline} />
          </IonFabButton>
        </IonFab>
        {message ? (
          <>
            <div className="ion-padding">
              <IonNote>{new Date(message.pubDate || "").toLocaleString()}</IonNote>
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
