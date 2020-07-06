import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, onClick}) => ( //card => type du symbole, feedback => affichage
    <div className={`card ${feedback}`} onClick={() => onClick(card) /*on lui donne UNE fonction, qui au moment donné fera appel à la fonction onClick*/}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

export default Card
