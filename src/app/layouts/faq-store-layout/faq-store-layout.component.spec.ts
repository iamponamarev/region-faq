import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqStoreLayoutComponent } from './faq-store-layout.component';

describe('FaqStoreLayoutComponent', () => {
  let component: FaqStoreLayoutComponent;
  let fixture: ComponentFixture<FaqStoreLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FaqStoreLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqStoreLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
