import { Component, OnInit } from '@angular/core';
import { BentoComboboxOptions, BentoWizardComponentEvent } from '@bento/bento-ng';
import { BehaviorSubject, Observable } from 'rxjs';
import { SchemeDetails } from '../schemedetails';

@Component({
  selector: 'app-scheme-details',
  templateUrl: './scheme-details.component.html',
  styleUrls: ['./scheme-details.component.css']
})
export class SchemeDetailsComponent implements OnInit {

  public schemeDetails:SchemeDetails=new SchemeDetails();

  public ngOnInit() {
   
  }
  public output:number=0;
  public schemetype:number=1;
  title = 'SparkHackathon-Welfare-FE';

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

  constructor() {
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

    var childDivs = document.getElementById('schemeCategories')?.getElementsByTagName('bento-checkbox');
    


  }

}
