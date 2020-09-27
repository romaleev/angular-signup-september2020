import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from '../../environments/environment';
import { fakeBackendProvider } from './fake.backend';
import { HttpClient, HttpResponse } from '@angular/common/http';

describe('FakeBackendInterceptor', () => {
  let injector: TestBed;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [fakeBackendProvider]
    });
    injector = getTestBed();
    http = injector.inject(HttpClient);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should register user successfully if body is correct', async () => {
    const correctUser = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@mail.com',
      password: 'Password-2020'
    };

    await http.post(`${environment.apiUrl}`, correctUser, { observe: 'response' })
      .toPromise()
      .then((response: HttpResponse<object>) => {
        expect(response).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body).toEqual(correctUser);
    });

  });

  it('should not register user if body is incorrect', async () => {
    const correctUser = {
      firstName: 'John',
      lastName: '',
      email: 'john.doe@mail.com',
      password: 'Password-2020'
    };

    await http.post(`${environment.apiUrl}`, correctUser, { observe: 'response' })
      .toPromise()
      .catch((response) => {
        expect(response.error.message).toEqual('Wrong format');
      });

  });

});
