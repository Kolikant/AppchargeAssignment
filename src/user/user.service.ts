import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserSession, User } from './user.model';

@Injectable()
export class UserService {
  userSessions: UserSession[] = []; //TODO: have seesions stored in dedicated service rather than on memory to allow sacling

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  loginUser(playerId: string, password: string) {
    if (this.validateUser(playerId, password)) {
      let session = this.userSessions.find(
        (session) => session.playerId == playerId,
      );
      if (session === undefined) {
        session = new UserSession(playerId);
        this.userSessions.push(session);
      }
      return session;
    }
    throw new Error(
      JSON.stringify({
        message: 'invalid user',
        status: 404,
      }),
    );
  }

  async signUpUser(playerId: string, password: string) {
    const user = new this.userModel({ playerId, password });
    const result = await user.save();
    return result.id as string;
  }

  private async validateUser(playerId: string, password: string) {
    const user = await this.userModel
      .findOne({
        playerId: playerId,
        password: password,
      })
      .exec();
    return user != null;
  }

  async getUserIdFromSession(sessionId: string): Promise<string | null> {
    const session = this.userSessions.find(
      (session) => session.sessionId === sessionId,
    );
    if (session) {
      const user = await this.userModel.findById(session.playerId).exec();
      return user.id;
    }
    return null;
  }
}
