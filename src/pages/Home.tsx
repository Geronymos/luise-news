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
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Item[] | undefined>([]);

  useIonViewWillEnter(async () => {
    const msgs = await getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonAvatar slot="start" style={{padding: "10px"}}>
            <img src="assets/icon/lui.png" alt="Logo" />
          </IonAvatar>
          <IonTitle>Luise-News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Luise-News
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {messages?.map(m => <MessageListItem key={m.title} message={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
