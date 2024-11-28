import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isDivVisible: boolean = true;

  cityArray: string[] = ["lahore", "karachi", "faisalabad", "multan"]

  divcolor: string = "bg-primary"

  hideDiv() {
    this.isDivVisible = false;
  }

  showDiv() {
    this.isDivVisible = true;
  }
}
