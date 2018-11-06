import { NgModule } from '@angular/core';

import { VivatutorSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [VivatutorSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [VivatutorSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class VivatutorSharedCommonModule {}
