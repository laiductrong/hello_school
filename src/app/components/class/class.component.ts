import { Component } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { Class } from '../../models/class';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrl: './class.component.scss'
})
export class ClassComponent {
 /**
  *
  */
 constructor(private classService: ClassService) {
  
 }

 classs: Class[] = [];
 ngOnInit(): void {
   this.classService.getClass().subscribe((res) => {
     if(res.success) {
       this.classs = res.data;
     }
     else{
       console.log(res.message);
     }
   })
 }
}
