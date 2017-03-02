import React, { Component } from 'react';

export default class NewQuestion extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    const question = this.refs.question.value;
    const answer = this.refs.answer.value;
    const distractors = this.refs.distractors.value.split(',').map((distractor) => {return parseInt(distractor.trim(), 10)});
    // console.log(distractors);
    $.ajax({
      url: '/questions',
      type: 'POST',
      data: {
        question: {
          question_text: question,
          answer: answer,
          distractors: distractors
        }
      },
      success: (question) => {
        this.props.handleSubmit(question);
        this.refs.question.value = '';
        this.refs.answer.value = '';
        this.refs.distractors.value = '';
      }
    });
  }

  render() {
    return (
      <div>
        <input ref='question' placeholder='question' />
        <input ref='answer' placeholder='answer' />
        <input ref='distractors' placeholder='distractor 1, distractor 2, ...' />
        <br/>
        <button onClick={this.handleClick.bind(this)}>Add new question</button>
      </div>
    )
  }
}
