import React, { PropTypes } from 'react';

export default class Questions extends React.Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {
      question: this.props.question,
      answer: this.props.answer };
  }

  updateAnswer = (answer) => {
    this.setState({ answer });
  };

  render() {
    return (
      <div>
        <h3>
          {this.state.question}
        </h3>
        <hr />
        <form >
          <label htmlFor="answer">
            Answer:
          </label>
          <input
            id="answer"
            type="text"
            value={this.state.answer}
            onChange={(e) => this.updateAnswer(e.target.value)}
          />
        </form>
        <h5>{this.state.answer}</h5>
      </div>
    );
  }
}
