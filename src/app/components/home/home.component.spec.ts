import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { UsersService } from 'src/app/services/users/users.service';

import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let usersService: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    usersService = TestBed.get(UsersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render paragraph', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('home works!');
  });

  describe('ngOnInit', () => {
    it('Doit retourner une liste de 4 utilisateurs', () => {
      let response: any;
      let usersNumber: number;

      const userResponse: Array<object> = new Array<object>();

      usersService.all().subscribe((res) => {
        response = res;
        usersNumber = response.length;
        expect(usersNumber).toEqual(4);
      });
    });
  });
});
