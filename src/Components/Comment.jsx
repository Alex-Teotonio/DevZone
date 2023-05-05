import styles from './Comment.module.css';
import { useState } from "react";
import PropTypes from 'prop-types';

import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/Alex-Teotonio.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alex Teotonio</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button 
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}


Comment.propTypes = {
  content: PropTypes.string.isRequired,
  onDeleteComment: PropTypes.func.isRequired
}