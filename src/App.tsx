import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ViewMessage from './pages/ViewMessage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { calendar, newspaper } from 'ionicons/icons';
import Calendar from './pages/Calendar';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonContent>

        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/calendar" component={Calendar} exact={true} />
            <Route path="/message/:id" component={ViewMessage} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="calendar" href="/calendar">
              <IonIcon icon={calendar} />
              <IonLabel>Kalendar</IonLabel>
            </IonTabButton>

            <IonTabButton tab="home" href="/home">
              <IonIcon icon={newspaper} />
              <IonLabel>News</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonReactRouter>
  </IonApp >
);

export default App;
