import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDailogComponent } from './edit-user-dailog-component';

describe('EditUserDailogComponent', () => {
  let component: EditUserDailogComponent;
  let fixture: ComponentFixture<EditUserDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserDailogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserDailogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
