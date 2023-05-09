// src/order/encryption.service.ts

import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class EncryptionService {
  private algorithm = 'aes-256-cbc';
  private encryptionKey = 'bf3c199c2470cb477d907b1e0917c17b'; //'TODO: notHavePlaintextEncryptionKeyInCode';
  private iv = '5183666c72eec9e4'; //TODO: save in different file

  encrypt(text: string): string {
    const cipher = crypto.createCipheriv(
      this.algorithm,
      this.encryptionKey,
      this.iv,
    );
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
  }

  decrypt(encryptedText: string): string {
    const encryptedData = Buffer.from(encryptedText, 'hex');
    const decipher = crypto.createDecipheriv(
      this.algorithm,
      Buffer.from(this.encryptionKey),
      this.iv,
    );
    let decrypted = decipher.update(encryptedData);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }
}
