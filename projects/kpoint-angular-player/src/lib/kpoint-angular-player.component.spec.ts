import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpointAngularPlayerComponent } from './kpoint-angular-player.component';

describe('KpointAngularPlayerComponent', () => {
  let component: KpointAngularPlayerComponent;
  let fixture: ComponentFixture<KpointAngularPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpointAngularPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpointAngularPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
