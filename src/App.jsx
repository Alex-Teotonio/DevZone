import {Header} from './Components/Header'
import { Sidebar } from './Components/Sidebar';
import {Post} from './Components/Post';

import './global.css';
import style from './App.module.css';

export function App() {
  return (
    <div>
      <Header/>
      <div className={style.wrapper}>
        <Sidebar/>
        <Post/>
      </div>
    </div>
  )
}

