import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote
} from '@ionic/react';
// import { Message } from '../data/messages';
import { Item } from "rss-parser";
// import './MessageListItem.css';

interface MessageListItemProps {
  message: Item;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${encodeURI(message.title || "")}`} detail={false}>
      <IonLabel className="ion-text-wrap">
        <IonNote>{message.pubDate}</IonNote>
        <h2>
          {message.title}
        </h2>
        <h3>{message.contentSnippet}</h3>
        <p>
          {/* {message.contentSnippet} */}
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;
