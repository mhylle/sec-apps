import {User} from './user';

export class SecEvent {
  id: number;
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  startSign: Date;
  endSign: Date;
  endCancel: Date;
  location: string;
  fee: number;
  noShowFee: number;
  maximumAttendees: number;
  attendees: User[];
}
