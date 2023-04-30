import './global.css';
import style from './App.module.css'
import {Header} from './Components/Header'
import { Sidebar } from './Components/Sidebar';

export function App() {
  return (
    <div>
      <Header/>
      <div className={style.wrapper}>
        <Sidebar/>
        <main>
          Teste
        </main>
      </div>
    </div>
  )
}

