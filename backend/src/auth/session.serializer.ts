import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error | null, id?: string) => void): void {
    console.log('Serializing user:', user);
    if (!user || !user.id) {
      done(new Error('Invalid user object'));
    } else {
      done(null, user.id);
    }
  }

  deserializeUser(
    id: string,
    done: (err: Error | null, user?: any) => void
  ): void {
    // You can fetch the full user object here if necessary
    done(null, { id }); // Placeholder: Normally, query the database to get the user
  }
}
