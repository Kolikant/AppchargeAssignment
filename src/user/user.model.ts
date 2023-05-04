import { v4 as uuidv4 } from 'uuid';

export class UserSession {
  sessiodId: string;

  constructor(public playerId: string) {
    this.sessiodId = uuidv4();
  }
}
