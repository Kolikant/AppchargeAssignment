import { Injectable } from '@nestjs/common';

import { OrderSession } from './order.model';

@Injectable()
export class OrderService {
  userSessions: OrderSession[] = [];

  loginOrder(playerId: string, password: string) {
    if (this.validateOrder(playerId, password)) {
      let session = this.userSessions.find(
        (session) => session.playerId == playerId,
      );
      if (session === undefined) {
        session = new OrderSession(playerId);
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

  private validateOrder(playerId: string, password: string) {
    //TODO: implement validation from userDB
    return true;
  }
}
