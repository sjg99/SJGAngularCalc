import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SJGAngularCalc';
  Result='';
  Operation:string='';
  Operator:string='';
  Number1='';
  Number2='';
  showcalc=true;
  showres=true;

  OperatorChange(){
    if(this.Operation!=''){
      this.showcalc=false;
      if(this.Operation=='Addition')this.Operator='+';
      if(this.Operation=='Substraction')this.Operator='-';
      if(this.Operation=='Multiplication')this.Operator='*';
      if(this.Operation=='Division')this.Operator='/';
      if(this.Operation=='Module')this.Operator='%';
    }
  }
  Calculate(){
    if(this.Number1!='' && this.Number2!=''){

    }
    else{
      this.showres=false;
      this.Result="Both Fields must have a value";
    }
  }
}
