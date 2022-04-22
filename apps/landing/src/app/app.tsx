import * as React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss'
import { ReactComponent as TransferLogo } from '../assets/transfer-money-home.svg'

const MoneyTransfer = React.lazy(() => import('make-transfer/Module'));

const AcceptTransfer = React.lazy(() => import('accept-transfer/Module'));

const isActiveStyle = {
  textDecoration: 'underline',
  fontWeight: 700
}
export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul className={styles['menu']}>
        <li>
          <NavLink to="/" style={({ isActive }) => isActive ? isActiveStyle : {}}>Home</NavLink>
        </li>

        <li>
          <NavLink to="/make-transfer" style={({ isActive }) => isActive ? isActiveStyle : {}}> Make Transfer </NavLink>
        </li>

        <li>
          <NavLink to="/accept-transfer" style={({ isActive }) => isActive ? isActiveStyle : {}}>Accept Transfer</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={
        <div className={styles['wrapper']}>
          <div className={styles['container']}>
          <div className={styles['welcome']}>
            <h1>
              <span> Hello there, </span>
              Welcome to Nrwl Union 👋
            </h1>
          </div>
            <TransferLogo/>
          </div>
          <p className={styles['blurb']}>
            You can send or receive fish 🐠 to other Nrwlians
          </p>
        </div>
      } />

        <Route path="/make-transfer" element={<MoneyTransfer />} />

        <Route path="/accept-transfer" element={<AcceptTransfer />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
