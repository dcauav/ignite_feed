import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/dcauav.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Cauã Vieira Almeida</strong>
                            <time title="11 de Março às 18:46" dateTime="2025-03-11 18:46:00">Publicado há 1h</time>
                        </div>
                        <button title="Deletar comentário" type="button">
                            <Trash size={24}></Trash>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button type="button">
                        <ThumbsUp></ThumbsUp> 
                        Aplaudir <span>28</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}