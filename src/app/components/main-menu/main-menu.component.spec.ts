import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainMenuComponent} from './main-menu.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MainMenuComponent,
        RouterTestingModule,
      ],
      providers:
        [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {path: 'home'}
            }
          }
        ]
    });
    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

