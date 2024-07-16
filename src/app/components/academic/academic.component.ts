import { Component } from '@angular/core';
import { AcademicService } from '../../services/academic.service';
import { Academic } from '../../models/academic';
import { AuthService } from '../../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.scss'
})
export class AcademicComponent {
  /**
   *
   */
  constructor(private modalService: NgbModal,private academicService: AcademicService ,private auth: AuthService) {
    
    
  }

  
  openScrollableContent(longContent: any) {
		this.modalService.open(longContent, { scrollable: true });
	}

  academics: Academic[] = [];
  ngOnInit(): void {
    console.log(this.auth.getUserRole());
    
    this.academicService.GetAY().subscribe((res) => {
      if(res.success) {
        this.academics = res.data;
      }
      else{
        console.log(res.message);
      }
    })
  }
  addAcademic() {
    console.log("Add");
  }
  updateAcademic(id: number) {
    console.log(id);
  }
  deleteAcademic(id: number) {
    console.log(id);
  }
}
