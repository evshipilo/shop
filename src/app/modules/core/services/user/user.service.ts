import {Injectable} from '@angular/core';

enum role {
  user = 'user',
  admin = 'admin'
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  role = role.user;

  setAdminRole(): void {
    this.role = role.admin;
  }

  setUserRole(): void {
    this.role = role.user;
  }

  isAdmin(): boolean {
    if (this.role === role.admin) { return true; }
    else { return false; }
  }
}
