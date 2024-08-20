import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweProfileComponent } from './viwe-profile.component';

describe('ViweProfileComponent', () => {
  let component: ViweProfileComponent;
  let fixture: ComponentFixture<ViweProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViweProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViweProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
