import styles from './transfer.module.scss';
import { ReactComponent as SearchLogo } from './assets/search-transfer.svg';

/* eslint-disable-next-line */
export interface TransferProps {
  text: string,
  buttonText: string
}

export function Transfer({ buttonText, text }: TransferProps) {
  return (
    <div className={styles['wrapper']}>
    <div className={styles['container']}>
      <SearchLogo />
      <p className={styles['ques']}>
        {text}
    </p>
    <div className={styles['intake']}>
      <input/>
      <button> {buttonText} 🐡 </button>
    </div>
    </div>
   
  </div>
  );
}

export default Transfer;
