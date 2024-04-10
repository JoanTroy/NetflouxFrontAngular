import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditActeurComponent } from './add-edit-acteur.component';

describe('AddEditActeurComponent', () => {
  let component: AddEditActeurComponent;
  let fixture: ComponentFixture<AddEditActeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditActeurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
