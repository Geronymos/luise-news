import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
// import { Message } from '../data/messages';
import { Item } from "rss-parser";
import './MessageListItem.css';

interface MessageListItemProps {
  message: Item;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {message.title}
          <span className="date">
            <IonNote>{message.pubDate}</IonNote>
          </span>
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
