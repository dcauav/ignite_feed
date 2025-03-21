import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);
    
    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    function handleDeleteComment () {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/dcauav.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Cauã Vieira Almeida</strong>
                            <time title="11 de Março às 18:46" dateTime="2025-03-11 18:46:00">Publicado há 1h</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário" type="button">
                            <Trash size={24}></Trash>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button type="button" onClick={handleLikeComment}>
                        <ThumbsUp></ThumbsUp>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}