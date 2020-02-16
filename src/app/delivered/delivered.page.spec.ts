import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliveredPage } from './delivered.page';

describe('DeliveredPage', () => {
  let component: DeliveredPage;
  let fixture: ComponentFixture<DeliveredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
