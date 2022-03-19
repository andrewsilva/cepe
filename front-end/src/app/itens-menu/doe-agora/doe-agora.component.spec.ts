import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoeAgoraComponent } from './doe-agora.component';

describe('DoeAgoraComponent', () => {
  let component: DoeAgoraComponent;
  let fixture: ComponentFixture<DoeAgoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoeAgoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoeAgoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
