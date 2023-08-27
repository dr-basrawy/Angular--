import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByJsonServerComponent } from './products-by-json-server.component';

describe('ProductsByJsonServerComponent', () => {
  let component: ProductsByJsonServerComponent;
  let fixture: ComponentFixture<ProductsByJsonServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsByJsonServerComponent]
    });
    fixture = TestBed.createComponent(ProductsByJsonServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
