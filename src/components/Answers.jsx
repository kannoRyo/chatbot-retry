import React from 'react'

import {Answer} from './index'

const Answers = (props)=>{
    // console.log(props.answers)
    return(
        <div className="c-grid__answer">
            {
                props.answers.map((answer,index)=>{
                    console.log(answer)
                    return(
                        <Answer content={answer.content} key={index.toString()}  nextId={answer.nextId} />
                    )
                })
            }
        </div>
    )
}

export default Answers