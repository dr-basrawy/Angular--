import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPerantComponent } from './products-perant.component';

describe('ProductsPerantComponent', () => {
  let component: ProductsPerantComponent;
  let fixture: ComponentFixture<ProductsPerantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsPerantComponent]
    });
    fixture = TestBed.createComponent(ProductsPerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
