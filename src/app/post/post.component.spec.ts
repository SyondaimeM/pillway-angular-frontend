// app/pages/post/post.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponent],
      providers: [
        provideHttpClient(),
        provideAnimationsAsync()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dark mode', () => {
    const initialMode = component.isDarkMode();
    component.toggleDarkMode();
    expect(component.isDarkMode()).toBe(!initialMode);
  });

});
