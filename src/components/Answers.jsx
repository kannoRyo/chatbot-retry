import React from 'react'

import {Answer} from './index'

const Answers = (props)=>{
    return(
        <div className="c-grid__answer">
            {
                props.answers.map((answer,index)=>{
                    return(
                        <Answer content={answer.content} key={index.toString()}  nextId={answer.nextId} selectAnswer={props.selectAnswer}/>
                    )
                })
            }
        </div>
    )
}

export default Answers