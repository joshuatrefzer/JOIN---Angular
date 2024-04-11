import { Component, HostListener } from '@angular/core';
import { TemplateService } from '../services/template.service';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  constructor(
    public templateService: TemplateService,
    public userService: UserService,
    public auth: AuthenticationService,
    public router: Router,
  ) {
    this.checkForMobileView();   
   }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkForMobileView();
  }


  checkForMobileView() {
    if (window.innerWidth < 1200) {
      this.templateService.mobileview = true;
    } else {
      this.templateService.mobileview = false;
    }
  }


  togglePopup(){
    this.templateService.logOutMenu = !this.templateService.logOutMenu;
  }


  getFirstLetter(name: string) {
    let letter = name.charAt(0).toUpperCase();
    return letter;
  }

  logOut(){
    localStorage.removeItem('Token');
    window.location.reload();
  }


}
