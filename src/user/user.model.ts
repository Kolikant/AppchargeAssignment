import { v4 as uuidv4 } from 'uuid';
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  playerId: { type: String, required: true },
  password: { type: String, required: true },
});

export interface User extends mongoose.Document {
  id: string;
  playerName: string; //TODO: add constraints on playerID, add uniqueness
  password: string; //TODO: use hash for password storage
}

export const UserModel = mongoose.model<User>('User', UserSchema);

//TODO: move into user and use sessions as optional fields
export class UserSession {
  sessionId: string;

  constructor(public playerId: string) {
    this.sessionId = uuidv4();
  }
}
