import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ErrorHandlingService} from './error-handling.service';
import {Observable, of} from 'rxjs';
import {BRX_API} from '../config/api';
import {catchError, map} from 'rxjs/operators';
import {BrxAddress, BrxPostalCodeApiAddress} from '../interfaces/brx-address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  public responseCache = new Map();

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlingService) {
  }

  getAddressByPostalCodeAndHouseNumber(postalCode: string, houseNumber: number | string): Observable<BrxAddress> {
    const URL = BRX_API.addresses.findByPostalCodeAndHouseNumber(postalCode, houseNumber);
    const addressFromCache = this.responseCache.get(URL);
    if (addressFromCache) {
      return of(addressFromCache);
    }

    const response = this.http.get<BrxPostalCodeApiAddress>(URL).pipe(
      map((result: BrxPostalCodeApiAddress) => {
        if (result.response.numFound < 1) {
          return null;
        }
        const apiAddress = result.response.docs[0];
        const address: BrxAddress = {
          street: apiAddress.straatnaam,
          houseNumber: apiAddress.huisnummer,
          postalCode: apiAddress.postcode,
          city: apiAddress.woonplaatsnaam,
          country: 'NL'
        };
        return address;
      }),
      catchError(this.errorHandlerService.handleError<BrxAddress>('getAddressByPostalCodeAndHouseNumber', null))
    );

    response.subscribe(address => this.responseCache.set(URL, address));

    return response;
  }


}
