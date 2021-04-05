import {Component, OnInit} from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators
} from '@angular/forms';
import {Observable} from "rxjs";
import { of } from 'rxjs';
import {debounceTime} from "rxjs/operators";

@Component({
    selector: 'app-process-order',
    templateUrl: './process-order.component.html',
    styleUrls: ['./process-order.component.scss']
})
export class ProcessOrderComponent implements OnInit {

    orderForm: FormGroup
    isValid: boolean

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.orderForm = this.fb.group({
            firstName: ['', [Validators.required,]],
            lastName: ['', ],
            email: ['',[Validators.required,Validators.email]],
            phones: this.fb.array([['']]),
            isPickUp: [false],
            deliveryAddress: [''],
        },{ validators: this.isPickUpValidator });

        this.orderForm.statusChanges.subscribe(v => {
            console.log(v)
            this.isValid=(v === 'VALID')
        })

    }

    isPickUpValidator(control: AbstractControl): ValidationErrors | null {
        const isPickUp = control.get('isPickUp');
        const deliveryAddress = control.get('deliveryAddress');
        if (isPickUp.value === false) {
        return deliveryAddress.value.length? null : {isPickUpValidatorMessage: 'error'}
        }
    };

    get phones(): FormArray {
        return this.orderForm.get('phones') as FormArray;
    }

    get firstName(): FormControl {
        return this.orderForm.get('firstName') as FormControl;
    }

    get email(): FormControl {
        return this.orderForm.get('email') as FormControl;
    }

    get deliveryAddress(): FormControl {
        return this.orderForm.get('deliveryAddress') as FormControl;
    }

    get isPickUp(): boolean {
        return this.orderForm.get('isPickUp').value;
    }

    addPhone() {
        this.phones.push(new FormControl());
    }

    removePhone(index) {
        this.phones.removeAt(index)
    }

}
