import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatError} from "@angular/material";
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import * as $ from 'jquery';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-contact',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

    form: FormGroup;
    formErrors: any;
    errorEnvio: boolean = false;
    terminoSubmit: boolean = false;

    private _unsubscribeAll: Subject<any>;
    constructor(private _formBuilder: FormBuilder,private http_client: HttpClient,) {
        this.openMenu();
        this.formErrors = {
            nombre: {},
            email: {},
            tema: {},
            mensaje: {},
        };
        this._unsubscribeAll = new Subject();
    };

    ngOnInit() {
        this.terminoSubmit = false;
        this.form = this._formBuilder.group({
            nombre: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            tema: ['', Validators.required],
            mensaje: ['', Validators.required],
        });
        this.form.valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.onFormValuesChanged();
            });
    }

    onFormValuesChanged(): void {
        for (const field in this.formErrors) {
            if (!this.formErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.formErrors[field] = {};
            // Get the control
            const control = this.form.get(field);
            if (control && control.dirty && !control.valid) {
                this.formErrors[field] = control.errors;
            }
        }
    }

    onSubmit() {

        if (this.form.invalid) {
            // formulario inválido
        }else{
            this.terminoSubmit = false;
            var valueForm = this.form.value;
            var requestForm = new RequestForm(valueForm);
            var request = JSON.stringify(requestForm);
            return this.http_client.post('http://66.97.42.52:8080/cobrosonlinebackend/sitioweb/enviarEmail', request, this.generateHeaders()).subscribe({
                next: data => {
                    //exito
                    this.terminoSubmit = true;
                    this.errorEnvio = false;
                },
                error: error => {
                    //error
                    this.terminoSubmit = true;
                    this.errorEnvio = true;
                },
            })
        }
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

    private generateHeaders = () => {
        return {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
    }

    

}

export class RequestForm
{
    public nombre: string;
    public email: string;
    public tema: string;
    public mensaje: string;
    constructor(requestForm)
    {
        {
            this.nombre = requestForm.nombre || '';
            this.email = requestForm.email || '';
            this.tema = requestForm.tema || '';
            this.mensaje = requestForm.mensaje || '';
        }
    }
}
