import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { VivatutorRegionModule } from './region/region.module';
import { VivatutorCountryModule } from './country/country.module';
import { VivatutorLocationModule } from './location/location.module';
import { VivatutorDepartmentModule } from './department/department.module';
import { VivatutorTaskModule } from './task/task.module';
import { VivatutorEmployeeModule } from './employee/employee.module';
import { VivatutorJobModule } from './job/job.module';
import { VivatutorJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        VivatutorRegionModule,
        VivatutorCountryModule,
        VivatutorLocationModule,
        VivatutorDepartmentModule,
        VivatutorTaskModule,
        VivatutorEmployeeModule,
        VivatutorJobModule,
        VivatutorJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VivatutorEntityModule {}
