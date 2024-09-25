import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
length = 0;
includeLetters = false;
includenumbers = false;
includesymbols = false;
password ='';
onchangelength(e:any){
  const value=e.target.value
  console.log(value)
    const parsedvalue = parseInt (value);
    if (!isNaN(parsedvalue)){
      this.length = parsedvalue;
    }

  }


  onchangeuseletters(){
this.includeLetters = !this.includeLetters;
  }
 onchangeusenumbers(){
this.includenumbers = !this.includenumbers;
 }
  onchangeusesymbols(){
this.includesymbols = !this.includesymbols;
  }
  onButtonClick(){
   const letters ='abcdefghijklmnopqrstuvwxyz';
   const numbers ='1234567890';
   const symbols ='!@#$%^&*';
   let validChars ='';
   if (this.includeLetters) {
  validChars += letters;
   }
   if (this.includenumbers){
    validChars += numbers;
   }
   if (this.includesymbols){
    validChars += symbols;
   }
   let generatepassword = '';
   if (this.length<=5){
    return alert("please enter more than 5")
   }
   for(let i=0; i< this.length; i++){
    const index = Math.floor(Math.random() * validChars.length);
    generatepassword += validChars[index];
   }
  this.password = generatepassword;
}
}