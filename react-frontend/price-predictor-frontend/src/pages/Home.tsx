import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="content">
        <Card />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
