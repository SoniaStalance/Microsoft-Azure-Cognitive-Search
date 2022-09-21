import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CognitiveSearchService {

  constructor(private http: HttpClient) { }

  public getData(searchTerm: string): Observable<any>{
    const api = "https://stalancesearch.search.windows.net/indexes/hotels-sample-index/docs?api-version=2021-04-30-Preview&search="+searchTerm;
    console.log(api)
    const head = new HttpHeaders({
      'api-key': 'vYpqxMQGBdnelPTryk5Cqk2UBQZHKUesx4Ar0W9XxeAzSeAnhEiC'
    });

    return this.http.get<any>(api, {headers: head});
  }
}
