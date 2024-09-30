import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { UserServiceService } from '../services/user-service.service';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userServiceSpy: jasmine.SpyObj<UserServiceService>;
  let authServiceSpy: jasmine.SpyObj<AuthServiceService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    userServiceSpy = jasmine.createSpyObj('UserServiceService', ['login']);
    authServiceSpy = jasmine.createSpyObj('AuthServiceService', ['setRoles', 'setToken']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: UserServiceService, useValue: userServiceSpy },
        { provide: AuthServiceService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /stocklist for ROLE_CUSTOMER', fakeAsync(() => {
    const response = {
      roles: [{ name: 'ROLE_CUSTOMER' }],
      accessToken: 'fakeAccessToken'
    };

    userServiceSpy.login.and.returnValue(of(response));

    component.login();
    tick();

   
    expect(authServiceSpy.setToken).toHaveBeenCalledWith(response.accessToken);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/stocklist']);
  }));

  it('should navigate to / for other roles', fakeAsync(() => {
    const response = {
      roles: [{ name: 'ROLE_ADMIN' }],
      accessToken: 'fakeAccessToken'
    };

    userServiceSpy.login.and.returnValue(of(response));

    component.login();
    tick();

   
    expect(authServiceSpy.setToken).toHaveBeenCalledWith(response.accessToken);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  }));

  it('should handle login error', fakeAsync(() => {
    const errorResponse = { status: 401, statusText: 'Unauthorized' };

    userServiceSpy.login.and.returnValue(throwError(errorResponse));

    component.login();
    tick();

    expect(authServiceSpy.setRoles).not.toHaveBeenCalled();
    expect(authServiceSpy.setToken).not.toHaveBeenCalled();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  }));
});
