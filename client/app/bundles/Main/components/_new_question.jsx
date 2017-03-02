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
        <div className='row'>
          <div className="col m6 s12">
            <input ref='question' placeholder='question' />
          </div>
          <div className="col m2 s3">
            <input ref='answer' placeholder='answer' />
          </div>
          <div className="col m4 s9">
            <input ref='distractors' placeholder='distractor 1, distractor 2, ...' />
          </div>
        </div>
        <div className="row">
          <a className="waves-effect waves-light btn right" onClick={this.handleClick.bind(this)}>Add new question</a>
        </div>
      </div>
    )
  }
}
