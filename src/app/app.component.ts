import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Interpolation & Databinding
  title = 'question-angular';
  titleInterpolation = 'Este es un ejemplo de interpolacion';

  getSuma(numberOne: number, numberTwo: number){
    return numberOne+numberTwo;
  }

  // Interpolation & PropertyBinding
  textoPlaceholder = 'Escribe un texto aquí';
  disabled = true;
  src = 'https://images.unsplash.com/photo-1571023479098-1ed95127545e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

  constructor(){
    setInterval(() =>this.titleInterpolation = 'Este parrafo se cambio por medio de interpolation en Angular',3000);
    setInterval(() =>this.disabled = false,5000);
    setInterval(() =>this.textoPlaceholder = 'Este input se modifico a disabled=false por medio de interpolation en Angular',3000);
  }

  // Event Binding
  texto = 'Texto generado con EVENT BINDING';

  cambiarTexto():void{
    this.texto = "En la proxima sección veremos Two Way Binding";
  }

  twoWayText = '';

  // Directivas NgFor
  listEstudiantes:any[] = [
    {id: '1',nombre: 'Santiago Arango',estado:'Graduado'},
    {id: '1',nombre: 'Thomas Gonzales',estado:'Aceptable'},
    {id: '1',nombre: 'Benito Perez',estado:'Graduado'},
    {id: '1',nombre: 'Benito Perez',estado:'Aceptable'},
    {id: '1',nombre: 'Nicolas Perez',estado:'Libre'},
  ]

  mostrar = true;

  toogle():void{
    this.mostrar = !this.mostrar; //Indicamos que si es verdadera le coloque la propiedad inversa
  }
}
