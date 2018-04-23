import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({

    	
      providers: [{
		  provide: Http},DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
