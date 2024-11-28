import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApihttpclientComponent } from './apihttpclient.component';

describe('ApihttpclientComponent', () => {
  let component: ApihttpclientComponent;
  let fixture: ComponentFixture<ApihttpclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApihttpclientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApihttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
