import style from './Post.module.css';
import {Comment} from './Comment'
import { Avatar } from './Avatar';

export function Post() {
  return(
    <article className={style.post}>
      <header className={style.header}>
        <div className={style.author}>
          <Avatar src='https://github.com/Alex-Teotonio.png'/>
          <div className={style.authorInfo}>
            <strong>Alex Teotonio</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time>Publicado há 1h</time>
      </header>
      <div className={style.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 <a href='#'>jane.design/doctorcare</a></p>
        <p><a href>#novoprojeto</a> <a>#nlw</a> <a>#rocketseat</a></p>
      </div>

      <form className={style.commentForm}>
        <strong> Deixe seu feedback</strong>

        <textarea
          placeholder='Writing one comment....'
        />


        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <Comment/>
    </article>
  )
}