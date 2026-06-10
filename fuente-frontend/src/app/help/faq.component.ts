import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-help',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

    faqsFiltered = [
        {
            'question': '¿Hacen desarrollos a medida?',
            'answer': 'Si, realizamos los desarrollos que nos requieran los clientes'
        },
        {
            'question': 'si quiero un sistema ¿como es el proceso a llevar a cabo?',
            'answer': 'Vienes con la idea (avanzada o no), nosotros nos tomamos 2 semanas para analizarla, luego realizamos una reunion (presencial o por videollamada) y te presentamos la propuesta, es decir, realizamos un plan de desarrollo, etapas y entregas. Una vez esté clara la estimacion y pactada la propuesta, se comienza el desarrollo. Cada mes te mostraremos los avances hasta llegar a la fecha pactada de entrega, donde se finaliza el proyecto. Luego estamos disponibles para dar soporte y mantenimiento o para seguir el desarrollo con futuros módulos.'
        },
        {
            'question': '¿Hacen App para celular?',
            'answer': 'Si, realizamos App para sistemas Android.'
        },
        {
            'question': '¿Que tipos de sistemas hacen? y ¿a que tipos clientes se dedican?',
            'answer': 'Realizamos una amplia variedad de tipos de sistemas, sistemas web, app para celular. Hemos realizado desarrollos para clientes de tipo financiero, gestion de transporte (sistemas para controlar empresas de transporte), sistemas de control para negocios (como almacenes), App para pedido y ofrecimiento de servicios desde la casa, sistema para que puedas cobrar a los clientes de tu negocio de forma no presencial, entre otros tipos.'
        }
        ];

    constructor() {
        this.openMenu();
    }


    openMenu(){
        $('body').removeClass('noScroll');
        if ($('.collapse').hasClass('collapse-active')) {
            $('.collapse').removeClass('collapse-active');
        }
        else {
            $('.collapse').addClass('collapse-active');
        }
    }

}
