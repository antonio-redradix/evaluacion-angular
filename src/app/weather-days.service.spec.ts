import { TestBed } from '@angular/core/testing';

import { WeatherDaysService } from './weather-days.service';

describe('WeatherDaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherDaysService = TestBed.get(WeatherDaysService);
    expect(service).toBeTruthy();
  });
});
