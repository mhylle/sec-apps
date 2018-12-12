import {User} from './user';

export class Event {
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  startSign: Date;
  endSign: Date;
  endCancel: Date;
  location: string;
  fee: number;
  noshowfee: number;
  maximumAttendees: number;
  attendees: User[];
}
