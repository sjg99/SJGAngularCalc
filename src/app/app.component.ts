import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SJGAngularCalc';
  Result = '';
  Operation: string = '';
  Operator: string = '';
  Number1 = '';
  Number2 = '';
  showcalc = true;
  showres = true;

  OperatorChange() {
    if (this.Operation != '') {
      this.showcalc = false;
      if (this.Operation == 'Addition') this.Operator = '+';
      if (this.Operation == 'Substraction') this.Operator = '-';
      if (this.Operation == 'Multiplication') this.Operator = '*';
      if (this.Operation == 'Division') this.Operator = '/';
      if (this.Operation == 'Module') this.Operator = '%';
    }
  }
  Calculate() {
    this.showres = false;
    if ((this.Number1 && this.Number2) || (this.Number1 == '0' && this.Number2 == '0') || (this.Number1 && this.Number2 == '0') || (this.Number1 == '0' && this.Number2)) {
      if (this.Operator == '+') {
        this.Result = (parseFloat(this.Number1) + parseFloat(this.Number2)).toString();
      }
      if (this.Operator == '-') {
        this.Result = (parseFloat(this.Number1) - parseFloat(this.Number2)).toString();
      }
      if (this.Operator == '*') {
        this.Result = (parseFloat(this.Number1) * parseFloat(this.Number2)).toString();
      }
      if (this.Operator == '/') {
        if (this.Number2 != '0') this.Result = (parseFloat(this.Number1) / parseFloat(this.Number2)).toString();
        else this.Result = "You can´t divide by 0";
      }
      if (this.Operator == '%') {
        this.Result = (parseFloat(this.Number1) % parseFloat(this.Number2)).toString();
      }
    } else {
      this.Result = "Both Fields must have a value";
    }
  }
  Reset(){
    this.Result = '';
    this.Operation = '';
    this.Operator='';
    this.Number1 = '';
    this.Number2 = '';
    this.showcalc = true;
    this.showres = true;
  }
}
