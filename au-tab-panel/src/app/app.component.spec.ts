import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';
import { AuTabComponent } from './au-tab/au-tab.component';

let component: AppComponent, fixture: ComponentFixture<AppComponent>, el: DebugElement, tabPanel: DebugElement;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AuTabPanelComponent, AuTabComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css('#tab-panel'));

    fixture.detectChanges();
  })

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should find only one tab inside the tab container.`, async(() => {
    const tabs = tabPanel.queryAll(By.css('.tab'));
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  }));

  it(`should find the Contact tab button marked as active`, async(() => {
    const selectedTab = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedTab).toBeTruthy();
    expect(selectedTab.textContent).toBe(" Contact ");
  }));

  it('should display the Contacts tab',async () => {
    const contactEmail = tabPanel.query(By.css('.contact-email'));
    expect(contactEmail).toBeTruthy();
  });
  it('should switch to the Login tab', async () => {
    const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));
    
    tabButtons[0].nativeElement.click();
    
    fixture.detectChanges();

    const loginEmail = tabPanel.query(By.css('.login-email'));
    expect(loginEmail).toBeTruthy();

    const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toBe(' Login ');

  });
});
