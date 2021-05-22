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
  useIonViewWillEnter,
  IonItem,
  IonProgressBar,
} from '@ionic/react';
import './Home.css';
import Header from "../components/Header";

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Item[] | undefined>();

  useIonViewWillEnter(async () => {
    await refresh(undefined);
  });

  const refresh = async (e?: CustomEvent, reload: boolean = false) => {
    setMessages(undefined);
    // setShowPopover({ open: false, event: undefined });
    const msgs = await getMessages(reload);

    setMessages(msgs);
    e?.detail.complete();
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <Header title="Lui-News">
          <IonItem onClick={() => refresh(undefined, true)}>Aktualisieren</IonItem>
        </Header>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={e => refresh(e, true)}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {messages ? "" : <IonProgressBar type="indeterminate"></IonProgressBar>}
        <IonList>
          {messages?.map(m => <MessageListItem key={m.title} message={m} />) || ""}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
