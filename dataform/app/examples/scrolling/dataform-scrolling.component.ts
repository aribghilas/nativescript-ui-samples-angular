import { Component, OnInit, ViewChild } from "@angular/core";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
import { SuperUser } from "../data-services/user";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-scrolling",
    templateUrl: "dataform-scrolling.component.html"
})
export class DataFormScrollingComponent implements OnInit {
    private _user: SuperUser;

    constructor() {
    }

    ngOnInit() {
        this._user = new SuperUser("John", "Doe", "john_doe", "jdpass", "jd@company.com", new Date(2008, 7, 1), new Date(2008, 7, 1, 13, 21), "male", "Company Inc.", "www.company.com", "555-5325", "Gargantua", "Metropolis", "South Street", 1, 11111, "None");
    }

    @ViewChild('myScrollingDataForm', { static: false }) myCommitDataFormComp: RadDataFormComponent;

    get user(): SuperUser {
        return this._user;
    }

    public onTap() {
        this.myCommitDataFormComp.dataForm.commitAll();

        alert(
            {
                title: "Registration Details",
                message: this.myCommitDataFormComp.dataForm.source.toString(),
                okButtonText: "OK"
            });
    }
}