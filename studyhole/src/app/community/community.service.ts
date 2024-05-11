import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunityModel } from './community-model';
import { UserModel } from '../user/user-model';
import { environment } from '../environment';
import { ImageModel } from '../shared/image-upload-service';


@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private http: HttpClient) { }

  getAllCommunities(): Observable<Array<CommunityModel>>{
    return this.http.get<Array<CommunityModel>>(environment.baseUrl + '/api/community')
  }

  createCommunity(communityModel: CommunityModel): Observable<CommunityModel> {
    return this.http.post<CommunityModel>(environment.baseUrl + '/api/community',
      communityModel);
  }
  getOwnerUsers(communityId: number){
    return this.http.get<UserModel[]>(environment.baseUrl + '/api/community/owners/' + communityId);
  }

  getMemberUsers(communityId: number){
    return this.http.get<UserModel[]>(environment.baseUrl + '/api/community/members/' + communityId);
  }
  getCommunityImage(communityId: number){
    return this.http.get<ImageModel>(environment.baseUrl + '/api/community/image/' + communityId);
  }
  getCommunityById(communityId: number){
    return this.http.get<CommunityModel>(environment.baseUrl + '/api/community/' + communityId);
  }

  getCommunityByName(communityName: string){
    return this.http.get<CommunityModel>(environment.baseUrl + '/api/community/by-name/' + communityName);
  }

  getAllJoinedCommunities(){
    return this.http.get<CommunityModel[]>(environment.baseUrl + '/api/community/member-communities')
  }
}
