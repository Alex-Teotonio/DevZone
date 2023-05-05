import { useState } from 'react';
import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import style from './Post.module.css';
import {Comment} from './Comment'
import { Avatar } from './Avatar';
import PropTypes from 'prop-types';

export function Post({author, content, publishedAt}) {
  console.log(author.avatarUrl);
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);

  const [newCommentText, setNewCommentText] = useState('');
  
  function handleCrateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  const publishedAtDateFormatted = format(publishedAt,"dd 'de' LLLL 'às' HH:mm'h'");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });
  return(
    <article className={style.post}>
      <header className={style.header}>
        <div className={style.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={style.content}>
          {
            content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.id}>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p key={line.id}><a href="#">{line.content}</a></p>
            }
            })
          }

      </div>

      <form onSubmit={handleCrateNewComment} className={style.commentForm}>
        <strong> Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />


        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={style.commentList}>
        {comments.map(comment => {
          return (
            <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
          )
        })}
      </div>
    </article>
  )
}

Post.propTypes = {
  author: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired,
  publishedAt: PropTypes.instanceOf(Date),
}