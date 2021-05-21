import React, { useState } from 'react';
import { IonAvatar, IonButton, IonButtons, IonIcon, IonItem, IonList, IonPopover, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

const Header: React.FC<any> = ({ title, children }) => {

    const [showPopover, setShowPopover] = useState<{ open: boolean, event: Event | undefined }>({ open: false, event: undefined });

    const [present] = useIonAlert();

    return (<IonToolbar>
        <IonAvatar slot="start" style={{ padding: "10px" }}>
            <img src="assets/icon/lui.png" alt="Logo" />
        </IonAvatar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="end">
            <IonPopover
                isOpen={showPopover.open}
                event={showPopover.event}
                cssClass='my-custom-class'
                onDidDismiss={e => setShowPopover({ open: false, event: undefined })}
            >
                <IonList onClick={() => setShowPopover({ open: false, event: undefined })}>
                    {children}
                    <IonItem onClick={() => present("Erstellt von Gero Beckmann mit dem Ionic-Framework. ", [{ text: "Ok" }])}>Über</IonItem>
                </IonList>
            </IonPopover>
            <IonButton onClick={(event) => setShowPopover({ open: true, event: event.nativeEvent })}>
                <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
            </IonButton>
        </IonButtons>
    </IonToolbar>);
};

export default Header;