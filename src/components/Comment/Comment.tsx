import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react';

interface CommentsProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentsProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeletComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/157142047?v=4" alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Falcão</strong>

                                <time title='16 de julho as 23:01' dateTime='2024-07-16 23:01:02'>Cerca de 1h atrás</time>
                            </div>

                            <button onClick={handleDeletComment} title='Deletar comentário'>
                                <Trash size={24} />
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