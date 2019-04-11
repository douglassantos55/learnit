class Storage {
  constructor() {
    this.scores = this.getScores() || [];
    this.timers = this.getTimers() || {};
  }

  getScores() {
    return JSON.parse(localStorage.getItem('scores'));
  }

  getByTopic(topic) {
    return this.scores.filter(score => score.topic === topic);
  }

  setScore(topic, percentage) {
    this.scores.unshift({ date: new Date(), topic, percentage });
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }

  getTimers() {
    return JSON.parse(localStorage.getItem('timers'));
  }

  getTimer(topic) {
    return this.timers[topic] || 60;
  }

  setTimer(topic, seconds) {
    this.timers[topic] = seconds;
    localStorage.setItem('timers', JSON.stringify(this.timers));
  }
}

export default new Storage();
