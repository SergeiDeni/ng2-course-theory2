import { Component} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: `./car.component.html`,
  //     `
  // <h2>Single Car</h2>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta!</p>
  // `,

  //styleUrls: ['./car.component.css']
  styles: [`
  h2 {
    color: rosybrown;
  }
  `]
})
export class CarComponent {

        carName = 'Ford';
        carYear = 2017;

        getName(){
            return this.carName;
        }

  }

