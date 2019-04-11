import React from 'react';

class QuizConfiguration extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = { timer: this.props.timer };

    this.save = this.save.bind(this);
    this.setTimer = this.setTimer.bind(this);
  }

  setTimer(evt) {
    this.setState({ timer: evt.target.value });
  }

  save() {
    this.props.save(this.state.timer);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {

    return <div className="dialog">
      <h1>Configurations</h1>
      <form onSubmit={this.save}>
        <input type="number" onChange={this.setTimer} value={this.state.timer} ref={this.inputRef} />
        <button type="submit">Save</button>
      </form>
    </div>;
  }
}

export default QuizConfiguration;
