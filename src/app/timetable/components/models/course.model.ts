/*export class Course {

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
}*/

export class Course {
  startTime: Date;
  endTime: Date;
  group: string;
  title: string;
  type: string;
  teacher: string;
  room: string;

  constructor(start: Date, end: Date, group: string, subject: string, type: string, teacher: string, room: string){
   this.startTime = start;
   this.endTime = end;
   this.group = group;
   this.title = subject;
   this.type = type;
   this.teacher = teacher;
   this.room = room;
  }
}
