// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Transfer } from '@react-module-federation-example/transfer';

export function App() {
  return (
    <div className={styles['wrapper']}>
      <Transfer text=' Who would you like to send a fish 🐟 to today?' buttonText='Send'/>
    </div>
  );
}

export default App;
