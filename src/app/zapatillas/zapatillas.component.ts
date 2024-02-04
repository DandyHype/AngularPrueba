import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public titulo: string  = "Componente de Zapatillas"
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebok Clasic', 'Reebok', 'Blanco', 60, true),
            new Zapatilla('Reebok Clasic', 'Reebok', 'Blanco', 70, true),
            new Zapatilla('Reebok Clasic', 'Reebok', 'Blanco', 80, true),
            new Zapatilla('Reebok Clasic', 'Reebok', 'Blanco', 90, true)
        ];
    }

    ngOnInit(): void {
        console.log(this.zapatillas);
    }
}