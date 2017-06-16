import { NgModule } from '@angular/core';

import { WfAngular } from './WfAngular';
import { WfBroadcaster }  from './WfBroadcaster';
import { WfTranslate }  from './WfTranslate';

@NgModule({
  declarations: [
    WfAngular,
    WfBroadcaster,
    WfTranslate
  ],
  exports: [WfAngular]
})
export class WfModule {}