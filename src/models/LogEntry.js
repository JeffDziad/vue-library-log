export default class LogEntry {
  constructor(startTime) {
    this.inProgress = true;
    this.startTime = startTime;
    this.endTime = "";
    this.pagesRead = 0;
  }
}
