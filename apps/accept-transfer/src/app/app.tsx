// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Transfer } from '@react-module-federation-example/transfer';
import styles from './app.module.scss';

export function App() {
  return (
   <div className={styles['wrapper']}>
      <Transfer text=' Who sent you a 🐟 ?' buttonText='Receive'/>
   </div>
  );
}

export default App;
