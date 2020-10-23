import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

function Card({index, question} : InferProps<typeof Card.propTypes>) {
    return (
        <div>
            <h2>{index}. {question}</h2>
        </div>
    )
}

Card.propTypes = {
    index: PropTypes.number,
    question: {},
    nextQuestion: typeof (()=>{})
}

export default Card

