import MessageListItem from '../components/MessageListItem';
import React, { useState } from 'react';
import { getMessages } from '../data/messages';
import { Item } from "rss-parser";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonAvatar,
  IonItem,
  IonButtons,
  IonPopover,
  IonButton,
  IonIcon,
  IonProgressBar,
} from '@ionic/react';
import { ellipsisVertical, ellipsisHorizontal } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Item[] | undefined>();
  const [showPopover, setShowPopover] = useState<{ open: boolean, event: Event | undefined }>({ open: false, event: undefined });

  useIonViewWillEnter(async () => {
    await refresh(undefined);
  });

  const refresh = async (e?: CustomEvent, reload: boolean = false) => {
    setMessages(undefined);
    setShowPopover({ open: false, event: undefined });
    const msgs = await getMessages(reload);
    
    setMessages(msgs);
    e?.detail.complete();
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonAvatar slot="start" style={{ padding: "10px" }}>
            <img src="assets/icon/lui.png" alt="Logo" />
          </IonAvatar>
          <IonTitle>Luise-Calendar</IonTitle>
          <IonButtons slot="end">
            <IonPopover
              isOpen={showPopover.open}
              event={showPopover.event}
              cssClass='my-custom-class'
              onDidDismiss={e => setShowPopover({ open: false, event: undefined })}
            >
              <IonList>
                <IonItem onClick={() => refresh(undefined, true)}>Aktualisieren</IonItem>
                <IonItem>Über</IonItem>
              </IonList>
            </IonPopover>
            <IonButton onClick={(event) => setShowPopover({ open: true, event: event.nativeEvent })}>
              <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={e => refresh(e, true)}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {messages ? "" : <IonProgressBar type="indeterminate"></IonProgressBar>}

        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Luise-News
            </IonTitle>
          </IonToolbar>
        </IonHeader> */}

        <IonList>
          {messages?.map(m => <MessageListItem key={m.title} message={m} />) || ""}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
