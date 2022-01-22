import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  goTogitHub() {
    window.open('https://github.com/IsaqueSantosSilva', "_blank");
  }

  goToLinkedIn() {
    window.open('https://www.linkedin.com/in/isaque-silva-63843a202/', "_blank");
  }

  goToFreelancer() {
    window.open('https://www.freelancer.com/u/IsaacSSilva', "_blank");
  }

  goToWhatsapp() {
    window.open('https://api.whatsapp.com/send?phone=558296492140&text=sua%20mensagem', "_blank");
  }

}
