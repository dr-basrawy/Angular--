import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonServerProductDetailsComponent } from './json-server-product-details.component';

describe('JsonServerProductDetailsComponent', () => {
  let component: JsonServerProductDetailsComponent;
  let fixture: ComponentFixture<JsonServerProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonServerProductDetailsComponent]
    });
    fixture = TestBed.createComponent(JsonServerProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
