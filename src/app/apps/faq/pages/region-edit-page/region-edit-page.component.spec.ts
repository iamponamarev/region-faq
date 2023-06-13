import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionEditPageComponent } from './region-edit-page.component';

describe('RegionEditPageComponent', () => {
  let component: RegionEditPageComponent;
  let fixture: ComponentFixture<RegionEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RegionEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
