import React, { Component } from 'react';
import { Table, Tr, Td, unsafe } from 'reactable';
import SkyLight from 'react-skylight';

import QuestionEditForm from './_question_edit_form'

export default class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: {}
    }

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleUpdate(question) {
    this.props.onUpdate(question);
    this.refs.editQuestion.hide();
  }

  handleEdit(question) {
    this.setState({question});
    this.refs.editQuestion.show();
  }

  render() {
    const questions = this.props.questions.map((question) => {
      return (
        <Tr key={question.id}>
          <Td column='ID'>{question.id}</Td>
          <Td column='Question'>{question.question_text}</Td>
          <Td column='Answer'>{question.answer}</Td>
          <Td column='Distractors'>{question.distractors}</Td>
          <Td column='Action'><button onClick={() => { this.handleEdit(question)} }>Edit</button></Td>
        </Tr>
      )
    })

    // question={question}
    // handleUpdate={this.handleUpdate}

    return (
      <div>
        <Table
          className='table'
          itemsPerPage={10}
          pageButtonLimit={3}
          sortable={true}
          defaultSort={{column: 'ID', direction: 'asc'}}
          filterable={['ID', 'Question', 'Answer', 'Distractors']}
          >
          {questions}
        </Table>
        <SkyLight hideOnOverlayClicked ref="editQuestion" title="Edit Question">
          <QuestionEditForm
            question={this.state.question}
            handleUpdate={this.handleUpdate}/>
        </SkyLight>
      </div>

    )
  }
}
