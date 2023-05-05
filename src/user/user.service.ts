import { Injectable } from '@nestjs/common';

import { UserSession } from './user.model';

@Injectable()
export class UserService {
  userSessions: UserSession[] = [];

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

  signUpUser(playerId: string, password: string) {
    // TODO: put user into mongo
    return true;
  }

  private validateUser(playerId: string, password: string) {
    //TODO: implement validation from userDB
    return true;
  }

  getUserFromSession(sessionId: string): string {
    throw new Error('Method not implemented.');
  }
}
