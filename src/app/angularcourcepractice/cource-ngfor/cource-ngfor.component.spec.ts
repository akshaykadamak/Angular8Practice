import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceNgforComponent } from './cource-ngfor.component';

describe('CourceNgforComponent', () => {
  let component: CourceNgforComponent;
  let fixture: ComponentFixture<CourceNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourceNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
