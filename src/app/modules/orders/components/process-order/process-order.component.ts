import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {log} from "util";

@Component({
    selector: 'app-process-order',
    templateUrl: './process-order.component.html',
    styleUrls: ['./process-order.component.scss']
})
export class ProcessOrderComponent implements OnInit {

    orderForm: FormGroup

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.orderForm = this.fb.group({
            firstName: ['',[Validators.required,]],
            lastName: ['',[Validators.required,]],
            email: [''],
            phones: this.fb.array([[]]),
            isPickUp: [false],
            deliveryAddress: [''],
        });

        this.orderForm.statusChanges.subscribe(v => {
            console.log(v)
        })

    }


    get phones(): FormArray {
        return this.orderForm.get('phones') as FormArray;
    }

    get firstName(): FormControl {
        return this.orderForm.get('firstName') as FormControl;
    }

    get isPickUp():boolean {
        return this.orderForm.get('isPickUp').value;
    }

    addPhone() {
        this.phones.push(new FormControl());
    }

    removePhone(index) {
        this.phones.removeAt(index)
    }

}
