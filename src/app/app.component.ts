import { Component, OnInit } from '@angular/core';
import { BentoComboboxOptions, BentoWizardComponentEvent } from '@bento/bento-ng';
import { BehaviorSubject, Observable } from 'rxjs';
import { SchemeDetails } from './schemedetails';
import { SchemedetailsService } from './schemedetails.service';
import { SchemeInfo, schemeModel } from './schemeinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public schemeDetails:SchemeDetails=new SchemeDetails();

  public searchText:string="";
  public isChecked:boolean=false;
  public ngOnInit() {
  }
  public output:number=0;
  public schemetype:number=1;
  title = 'Welfare Scheme';

  public dataStream: Observable<any[]>;
  public comboboxOptions: BentoComboboxOptions = {
    searchable: true, // Make combobox searchable
    useServerSearch: true, // Use server to search for results
    debounceTime: 300, // Key input debounce time before search starts
    minSearchCharacterCount: 3 // Min 3 characters required before the server search kicks in
  };

  /**
   * Currently selected row
   */
  public selectedRow: any;

  constructor(private schemeInfo:SchemedetailsService) {
    const states = [
      'Andhra Pradesh',
      'Arunachal Pradesh',
      'Assam',
      'Bihar',
      'Delhi',
      'Haryana',
      'Gujarat'
    ];
    this.selectedRow = null;
    this.dataStream = new BehaviorSubject(states) as Observable<any[]>;
  }



  onCurrentStepChanging(event: BentoWizardComponentEvent) {
    this.output = event.step ;
    this.schemeDetails.schemeCatagerioes="";
    this.schemeDetails.documentsRequired="";
    const schemeCatcontrols = document?.getElementById('schemeCategories')?.getElementsByTagName('input');
    
    if(schemeCatcontrols) {
    for(let i=0; i < schemeCatcontrols?.length; i++) {
      if(schemeCatcontrols[i].checked)
      {
        this.schemeDetails.schemeCatagerioes += `${schemeCatcontrols[i].name},`;
      }
    }
  }

  const docsreqcontrols = document?.getElementById('docsreq')?.getElementsByTagName('input');
    
    if(docsreqcontrols) {
    for(let i=0; i < docsreqcontrols?.length; i++) {
      if(docsreqcontrols[i].checked)
      {
        this.schemeDetails.documentsRequired += `${docsreqcontrols[i].name},`;
      }
    }
  }
  }

  public schemeURL:string="";
  public schemeInformation:SchemeInfo[]=[];
  public schemeModel:any;

  getSchemeInfo() {
    this.schemeInfo.getSchemeInfo()
    .subscribe((data)=>{
      this.schemeModel = data;
      this.schemeInformation=this.schemeModel.model;
      
    })  
  }


}
