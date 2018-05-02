import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@NgModule({


imports : [MatButtonModule, MatInputModule, MatDatepickerModule, MatSelectModule],
exports : [MatButtonModule, MatInputModule, MatDatepickerModule, MatSelectModule],
})

export class MaterialModule {
    
}