import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal2 } from './modal2';

describe('Modal2', () => {
  let component: Modal2;
  let fixture: ComponentFixture<Modal2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modal2],
    }).compileComponents();

    fixture = TestBed.createComponent(Modal2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
