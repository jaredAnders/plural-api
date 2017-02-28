import React, { Component } from 'react';

import QuestionListItem from './_question_list_item'

export default class QuestionList extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(question) {
    this.props.onUpdate(question);
  }

  render() {
    const questions = this.props.questions.map((question) => {
      return (
        <QuestionListItem
          key={question.id}
          question={question}
          handleUpdate={this.handleUpdate} />
      )
    })

    return (
      <ul>
        {questions}
      </ul>
    )
  }
}
