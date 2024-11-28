import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchildren',
  standalone: true,
  imports: [],
  templateUrl: './viewchildren.component.html',
  styleUrl: './viewchildren.component.css'
})
export class ViewchildrenComponent {

  fullName: string = '';

  @ViewChildren('inputEl') inputElements?: QueryList<ElementRef>;

  show(){
    let Name: string = '';
    this.inputElements?.forEach((el) => {
     Name += el.nativeElement.value + ' ';
    })

    this.fullName = Name.trim();
  }

}
