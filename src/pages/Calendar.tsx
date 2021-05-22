import MessageListItem from '../components/MessageListItem';
import React, { useState } from 'react';
import { getEvents } from '../data/calendar';
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
  IonLabel,
  IonNote,
} from '@ionic/react';
import './Home.css';
import Header from '../components/Header';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<any[] | undefined>();

  useIonViewWillEnter(async () => {
    await refresh(undefined);
  });

  const refresh = async (e?: CustomEvent, reload: boolean = false) => {
    setMessages(undefined);
    const msgs = await getEvents(reload);

    setMessages(msgs);
    e?.detail.complete();
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <Header title="Lui-Kalendar">
          <IonItem onClick={() => refresh(undefined, true)}>Aktualisieren</IonItem>
        </Header>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={e => refresh(e, true)}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {messages ? "" : <IonProgressBar type="indeterminate"></IonProgressBar>}

        <IonList>
          {/* {messages?.map(m => <MessageListItem key={m.uid} message={{title: m.summary, pubDate: m.start, contentSnippet: m.description}} />) || ""} */}
          {messages?.map(m => (
            <IonItem detail={false}>
              <IonLabel className="ion-text-wrap">
                <IonNote>{m.start.toLocaleString() + " - " + m.end.toLocaleString()}</IonNote>
                <h2>
                  {m.summary}
                </h2>
                <h3>{m.description}</h3>
                <p>
                  {/* {message.contentSnippet} */}
                </p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
