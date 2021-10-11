import './styles/globals.scss';
import styles from './styles.module.scss'
import { Header } from './components/Header';
import Routes from './routes';
import { SideMenu } from './components/SideMenu';
require('dotenv').config()

function App() {


  return (
    <div className={styles.main}>
      
    <SideMenu />
    <div>
    <Header />
    <Routes/>
    </div>
    </div>
  );
}

export default App;
