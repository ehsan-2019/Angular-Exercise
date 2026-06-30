import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Message {
  id: string;
}

/**
 * Exercise stub — simulates an async message API.
 *
 * Behaviour:
 *  - Resolves after ~600 ms with a generated message ID.
 *  - Toggle FORCE_FAILURE to `true` to make the observable error, so the
 *    candidate can exercise the error path during the live session.
 */
@Injectable({ providedIn: 'root' })
export class MessageApi {
  // ─── Toggle this to exercise the error path ───────────────────────────────
  private readonly FORCE_FAILURE = false;
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Simulates sending a message over the network.
   * Emits `{ id }` after ~600 ms, or errors when FORCE_FAILURE is true.
   */
  send(text: string): Observable<Message> {
    return new Observable<Message>((observer) => {
      const timer = setTimeout(() => {
        if (this.FORCE_FAILURE || text.includes('fail')) {
          observer.error(new Error(`MessageApi: simulated failure for "${text}"`));
        } else {
          observer.next({ id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}` });
          observer.complete();
        }
      }, 600);

      return () => clearTimeout(timer);
    });
  }
}
