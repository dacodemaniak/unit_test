import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';

import { of } from 'rxjs';

interface iUser {
  id: number;
  name: string;
  role: string;
}

const userId: number = 2;

describe('UsersService', () => {
  let usersService: UsersService;

  // Avant chaque test... récupérer le service
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });

    usersService = TestBed.get(UsersService);
  });

  it('Le service doit être instancié', () => {
    const service = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  // Test de la méthode All
  describe('Tester la méthode all()', () => {
    it('Doit retourner une liste d\'utilisateurs', () => {
      const userResponse = [
        {
          id: 1,
          name: 'Jean-Luc',
          role: 'Architecte'
        },
        {
          id: 2,
          name: 'Thomas',
          role: 'Unit Tester'
        }
      ];

      let response: Array<object>;
      spyOn(usersService, 'all').and.returnValue(of(userResponse));

      usersService.all().subscribe((res) => {
        response = res;
        const numberOfUsers: number = response.length;

        expect(numberOfUsers).toEqual(2);
      });

      expect(response).toEqual(userResponse);
      expect(response).toBe(userResponse);

    });
  });

  describe('Méthode findOne(id: number)', () => {
    it(`Doit retourner l\'utilisateur ${userId}`, () => {
      const user: iUser = {
        id: 2,
        name: 'Thomas',
        role: 'Unit Tester'
      };

      spyOn(usersService, 'findOne').and.returnValue(of(user));

      usersService.findOne(userId).subscribe((thom: iUser) => {
        const theUser = thom;
        expect(theUser).toEqual(user);
        expect(theUser.id).toEqual(userId);
      });
    });
  });
});


