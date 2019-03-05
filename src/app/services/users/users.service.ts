import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

/**
 * @name UsersService
 * @author Aélion - Mars 2019
 * @version 1.0.0
 */

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private users: Array<object> = [
    {
      id: 1,
      name: 'Jean-Luc',
      role: 'Architecte'
    },
    {
      id: 2,
      name: 'Thomas',
      role: 'Unit tester'
    },
    {
      id: 3,
      name: 'Lucas',
      role: 'Quality Analyst'
    },
    {
      id: 4,
      name: 'Marielle',
      role: 'Developer'
    }
  ];
  constructor() { }


  public all(): Observable<Array<object>> {
    return of(this.users);
  }

  public findOne(id: number): Observable<object> {
    return null;
  }
}
