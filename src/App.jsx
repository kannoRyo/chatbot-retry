import React from 'react'
import './assets/styles/style.css'
import DefaultDataset from './dataset'

import {Answers} from './components/index'

export default class App extends React.Component {
  constructor(props){
    super(props)
  
    this.state = {
      answers:[],
      chats:[],
      currentId:'init',
      dataset:DefaultDataset,
      open: false
    }
  }

  initAnswer(){
    const answers = this.state.answers
    const datasetAnswer = this.state.dataset[this.state.currentId].answers

    answers.push(...datasetAnswer)

    console.log(answers)
    this.setState({
      answers: answers
    })

  }

  componentDidMount(){
    this.initAnswer()
  }

  render(){

    return (
      <section className="c-section">
        <div className="c-box">
          <Answers answers={this.state.answers} />
        </div>
      </section>
    );
  }
}

