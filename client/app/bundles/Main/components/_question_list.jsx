import React, { Component } from 'react';
import { Table, Tr, Td, unsafe } from 'reactable';

export default class QuestionList extends Component {
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
        <Tr key={question.id}>
          <Td column='Question'>{question.question_text}</Td>
          <Td column='Answer'>{question.answer}</Td>
          <Td column='Distractors'>{question.distractors}</Td>
          <Td column='Action'>{unsafe('<button onClick={this.handleEdit.bind(this)}>Edit</button>')}</Td>
        </Tr>
      )
    })

    // question={question}
    // handleUpdate={this.handleUpdate}

    return (
      <Table className='table'>
        {questions}
      </Table>
    )
  }
}
