import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorsoComponent } from './torso.component';

describe('TorsoComponent', () => {
  let component: TorsoComponent;
  let fixture: ComponentFixture<TorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
