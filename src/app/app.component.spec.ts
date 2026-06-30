import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideAnimationsAsync(),
        provideHttpClient(),
        provideRouter([]),
      ],
    }).compileComponents();
  });

  it('should render the toolbar title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    const toolbar = compiled.querySelector('mat-toolbar');
    expect(toolbar).not.toBeNull();
    expect(toolbar!.textContent).toContain('Angular Exercise');
  });
});
