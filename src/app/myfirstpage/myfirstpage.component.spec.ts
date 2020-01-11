import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfirstpageComponent } from './myfirstpage.component';

describe('MyfirstpageComponent', () => {
  let component: MyfirstpageComponent;
  let fixture: ComponentFixture<MyfirstpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfirstpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfirstpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
