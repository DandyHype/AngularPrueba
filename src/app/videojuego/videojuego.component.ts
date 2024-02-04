import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los Juegos mas Populares";
        // console.log("Se a cargado el componente");
    }

    

    ngOnInit(): void {
        // console.log("OnInit ejecutado");
    }

    ngDoCheck(): void {
            // console.log("DoChek ejecutado");
    }

    ngOnDestroy(): void {
        // console.log("OnDestroy Ejecutado");
    }

    cambiaTitulo(): void{
        this.titulo = "Nuevo Titulo";
    }
}