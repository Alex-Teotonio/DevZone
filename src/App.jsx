import {Header} from './Components/Header'
import { Sidebar } from './Components/Sidebar';
import {Post} from './Components/Post';

import './global.css';
import style from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Alex-Teotonio.jpg',
      name: 'Alex Teotonio',
      role: 'Developer'
    },
    publishedAt: new Date('2023-05-03 21:00:00'),
    content: [
      {id: 5,type: 'paragraph', content: 'Fala galeraa 👋'},
      {
        id: 6,
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {id:7, type: 'link', content: 'jane.design/doctorcare'}
    ]    
  }
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={style.wrapper}>
        <Sidebar/>
          <main>
            {
              posts.map((p) => (
                <Post key={p.id} author={p.author} content={p.content} publishedAt={p.publishedAt}/>
              ))
            }
          </main>
      </div>
    </div>
  )
}

