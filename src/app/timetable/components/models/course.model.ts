export class Course {

  startTime: Date;
  endTime: Date;
  title: string;
  room: string;

  constructor(startTime: Date, endTime: Date, title: string, room: string) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.title = title;
    this.room = room;
  }
}
