import React, { Component } from 'react';

export default class QuestionListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false
    }
  }

  handleEdit() {
    if (this.state.editable) {
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
    this.setState({editable: !this.state.editable})
  }

  render() {
    const question_text = this.state.editable ?
      <input type='text'
        ref='question_text'
        defaultValue={this.props.question.question_text} /> :
      <p>{this.props.question.question_text}</p>;

    const answer = this.state.editable ?
      <input type='text'
        ref='answer'
        defaultValue={this.props.question.answer} /> :
      <span>{this.props.question.answer}</span>;

    const distractors = this.state.editable ?
      <input type='text'
        ref='distractors'
        defaultValue={this.props.question.distractors.map((distractor) => {
        return ` ${distractor}`})} /> :
      this.props.question.distractors.map((distractor, index) => {
        return (
          <span key={`${this.props.question.id}${index}`}>
            , {distractor}
          </span>
        )
      });

    return (
      <li>
        {question_text}
        <p>{answer}{distractors}</p>
        <button onClick={this.handleEdit.bind(this)}> {this.state.editable ? 'Save' : 'Edit' }</button>
      </li>
    )
  }
}
