import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async loginUser(playerId: string, password: string) {
    const logedUser = await this.validateUser(playerId, password);
    if (logedUser !== null) {
      const newSessionId = uuidv4();
      await this.userModel.updateOne(
        {
          playerId,
          password,
        },
        {
          sessionId: newSessionId,
        },
      );
      return newSessionId;
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
    return this.userModel
      .findOne({
        playerId: playerId,
        password: password,
      })
      .exec();
  }

  async getUserIdFromSession(sessionId: string): Promise<string | null> {
    const user = await this.userModel.findOne({ sessionId });
    if (user) {
      return user.id;
    }
    return null;
  }
}
