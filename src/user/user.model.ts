import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  playerId: { type: String, required: true },
  password: { type: String, required: true },
  sessionId: { type: String, required: false },
});

export interface User extends mongoose.Document {
  id: string;
  playerName: string; //TODO: add constraints on playerID, add uniqueness
  password: string; //TODO: use hash for password storage
  sessionId: string;
}

export const UserModel = mongoose.model<User>('User', UserSchema);
