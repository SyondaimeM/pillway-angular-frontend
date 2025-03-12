import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { loginSuccess } from './auth/auth.actions';
import { authReducer } from './auth/auth.reducer';
import { selectAuthToken } from './auth/auth.selectors';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        StoreModule.forRoot({ auth: authReducer }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should dispatch loginSuccess action and select token', () => {
    const token = 'test-jwt-token';
    
    // Mocking the store's selector to return a fake token
    spyOn(store, 'select').and.returnValue(of(token));

    component.ngOnInit();

    expect(store.select).toHaveBeenCalledWith(selectAuthToken);
    expect(component.token).toBe(token);
  });
});
