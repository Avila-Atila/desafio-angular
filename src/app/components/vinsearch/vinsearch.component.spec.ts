import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinsearchComponent } from './vinsearch.component';

describe('VinsearchComponent', () => {
  let component: VinsearchComponent;
  let fixture: ComponentFixture<VinsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinsearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
