import React from 'react'
import './assets/styles/style.css'
import DefaultDataset from './dataset'

import {
  Chats,
  Answers
} from './components/index'

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

    this.selectAnswer = this.selectAnswer.bind(this)
  }

  displayNextQuestion(nextQuestionId){
    const chats = this.state.chats
    const dataset = this.state.dataset[nextQuestionId]

    chats.push({
      text:dataset.question,
      type:'question'
    })

    this.setState({
      answers: dataset.answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer(selectedAnswer, nextQuestionId){
    switch(true){
      case (nextQuestionId) === 'init' :
        this.displayNextQuestion(nextQuestionId)
        break
      case (/^https:*/.test(nextQuestionId)) :
        const a = document.createElement('a')
        a.href = nextQuestionId
        a.target = '_blank'
        a.click()
        this.displayNextQuestion('init')
        break
      default:
        const chats = this.state.chats
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        })
        this.setState({
          chats: chats
        })

        setTimeout(() => {
          this.displayNextQuestion(nextQuestionId)
        }, 500);
        break;
    }
  }

  componentDidMount(){
    const initAnswer= ''
    this.selectAnswer(initAnswer,'init')
  }

  componentDidUpdate(){
    const scrollArea = document.getElementById('scroll-area')
    scrollArea.scrollTop = scrollArea.scrollHeight
  }

  render(){

    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats}/>
          <Answers answers={this.state.answers} selectAnswer={this.selectAnswer}/>
        </div>
      </section>
    );
  }
}

