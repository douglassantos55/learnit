class Storage {
  constructor() {
    this.scores = this.getItems() || [];
  }

  getItems() {
    return JSON.parse(localStorage.getItem('scores'));
  }

  getByTopic(topic) {
    return this.scores.filter(score => score.topic === topic);
  }

  setItem(topic, percentage) {
    this.scores.unshift({ date: new Date(), topic, percentage });
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }
}

export default new Storage();
