import { Component } from '@angular/core';
import { AcademicService } from '../../services/academic.service';
import { Academic, AddAcademic } from '../../models/academic';
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
  academicEdit : Academic = {yearId: 0, yearName: ''};

  
  //form add academic
  openScrollableContent(longContent: any) {
		this.modalService.open(longContent, { scrollable: true });
	}

  //form update academic
  openScrollableContent2(longContent: any, academic: Academic) {
    this.academicEdit.yearId = academic.yearId;
    this.academicEdit.yearName = academic.yearName;
		this.modalService.open(longContent, { scrollable: true });
	}
  //check user role
  public roleSuccess: boolean = false;
  //pagination
  page: number = 1;
  pageSize : number = 5;
  //list of academic
  academics: Academic[] = [];
  ngOnInit(): void {
    
    if(this.auth.getUserRole() === 'Admin') {
      this.roleSuccess = true;
    }
    this.academicService.GetAY().subscribe((res) => {
      if(res.success) {
        this.academics = res.data;
      }
      else{
        console.log(res.message);
      }
    })
  }
  addAcademic(yearAcademic : string) {
    let addAcademic : AddAcademic = {yearName: yearAcademic}
    this.academicService.AddAcademic(addAcademic).subscribe((res) => {
      if(res.success) {
        this.academics = res.data;
      }
      else{
        alert(res.message);
      }
    })
  }
  updateAcademic(yearName: string) {
    let updateAcademic : Academic = {yearId: this.academicEdit.yearId, yearName: yearName}
    console.log(updateAcademic);
    
    this.academicService.UpdateAcademic(updateAcademic).subscribe((res) => {
      if(res.success) {
        alert(res.message);
        this.academics = res.data;
      }
      else{
        alert(res.message);
      }
    })
  }
  deleteAcademic(id: number) {
    this.academicService.DeleteAcademic(id).subscribe((res) => {
      if(res.success) {
        alert(res.message);
        this.academics = res.data;
      }
      else{
        alert(res.message);
      }
    })
  }
}
