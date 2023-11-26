import { Component, OnInit } from '@angular/core';
import { HolidaysService } from './services/holidays.service';
import { Holiday } from './entities/holiday';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-holiday-checker',
  templateUrl: './holiday-checker.component.html',
  styleUrls: ['./holiday-checker.component.css']
})
export class HolidayCheckerComponent implements OnInit {


  title = 'Holidays';

  public fechaSeleccionada: any;
  public ano: number = new Date().getFullYear();
  public columnas = [
    { name: 'Holiday', prop: 'name' },
    { name: 'Date', prop: 'date' },
  ];
  public festivos: Holiday[] = [];

  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  public festivoSeleccion: Holiday | undefined;

  constructor(
    private holidaysService: HolidaysService,

  ) {
  }

  ngOnInit() {
    //  this.date = new Date().toLocaleDateString();
  }

  public validarFecha() {
    let fecha = new Date(this.fechaSeleccionada);
    this.holidaysService.verificarFecha(fecha).subscribe(
      respuesta => {
        window.alert(respuesta);
      }
    );
  }

  public obtenerFestivos() {
    this.holidaysService.getHolidays(this.ano)
      .subscribe(data => {
        this.festivos = data;
        /*
        this.festivos = data.map(festivo => {
          window.alert(festivo.fecha);
          const [año, mes, dia] = festivo.fecha.toDateString().split('-').map(Number);
          return new FestivoDto(festivo.festivo, new Date(año, mes - 1, dia));
        });
        */
      },
        err => {
          window.alert(err.message)
        });
  }

  public onActivate(event: any) {
    if (event.type == 'click') {
      this.festivoSeleccion = event.row;
    }
  }



}
