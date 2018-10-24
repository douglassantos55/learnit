import React from 'react';

class QuizConfiguration extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return <div className="dialog">
      <h1>Configurations</h1>
      <input type="number" onChange={this.setTimer} value={this.state.timer} />
      <button type="button" onClick={this.save}>Save</button>
    </div>;
  }
}

export default QuizConfiguration;
