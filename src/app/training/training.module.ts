import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CurrentTrainingComponent } from "./current-training/current-training.component";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { PreviousTrainingComponent } from "./previous-training/previous-training.component";
import { StopTrainingComponent } from "./stop-training/stop-training.component";
import { TrainingRoutingModule } from "./training-routing.module";
import { TrainingComponent } from "./training.component";

@NgModule({
    declarations: [
        TrainingComponent,
        CurrentTrainingComponent,
        NewTrainingComponent,
        PreviousTrainingComponent,
        StopTrainingComponent
    ],
    imports: [
        SharedModule,
        TrainingRoutingModule
    ],
    exports: [],
    entryComponents: [StopTrainingComponent]
})
export class TrainingModule {

}
