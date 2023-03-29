import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressAddEditComponent } from './adress-add-edit.component';

describe('AdressAddEditComponent', () => {
  let component: AdressAddEditComponent;
  let fixture: ComponentFixture<AdressAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdressAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
