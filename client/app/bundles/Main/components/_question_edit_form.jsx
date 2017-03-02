import React, { Component } from 'react';

export default class QuestionEditForm extends Component {
  constructor(props) {
    super(props);
  }

  handleEdit() {
    const id = this.props.question.id;
    const question_text = this.refs.question_text.value;
    const answer = this.refs.answer.value;
    const distractors = this.refs.distractors.value.split(',').map((distractor) => {return parseInt(distractor.trim(), 10)});
    const question = {
      id,
      question_text,
      answer,
      distractors
    }
    this.props.handleUpdate(question);
  }

  render() {
    return (
      <div>
        <input type='text'
          ref='question_text'
          defaultValue={this.props.question.question_text} />
        <input type='text'
          ref='answer'
          defaultValue={this.props.question.answer} />
        <input type='text'
          ref='distractors'
          defaultValue={this.props.question.distractors.map((distractor) => {
          return ` ${distractor}`})} />
        <a className='waves-effect waves-light btn right' onClick={this.handleEdit.bind(this)}>Save</a>
      </div>
    )
  }
}
