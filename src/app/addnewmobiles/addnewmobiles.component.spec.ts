import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewmobilesComponent } from './addnewmobiles.component';

describe('AddnewmobilesComponent', () => {
  let component: AddnewmobilesComponent;
  let fixture: ComponentFixture<AddnewmobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewmobilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewmobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
