import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroConvite } from './hero-convite';

describe('HeroConvite', () => {
  let component: HeroConvite;
  let fixture: ComponentFixture<HeroConvite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroConvite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroConvite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
