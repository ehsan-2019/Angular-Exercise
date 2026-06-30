import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideHttpClient(),
        provideRouter([]),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });
  
  it('should render the toolbar title', async () => {
    loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.detectChanges();

    const toolbar = await loader.getHarness(MatToolbarHarness);
    const title = await toolbar.getRowsAsText();
    expect(title).toContain('Angular Exercise');
  });
});
