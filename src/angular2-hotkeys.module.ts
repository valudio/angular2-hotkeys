import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HotkeyOptions, IHotkeyOptions } from './models/hotkey.options';
import { CheatSheetComponent } from './directives/cheatsheet.component';
import { Hotkeys } from './directives/hotkeys.directive';
import { HotkeysService } from './services/hotkeys.service';


export * from './directives/cheatsheet.component';
export * from './directives/hotkeys.directive';
export * from './services/hotkeys.service';
export * from './models/hotkey.model';

@NgModule({
  imports : [ CommonModule ],
  exports : [ Hotkeys, CheatSheetComponent ],
  declarations : [ Hotkeys, CheatSheetComponent ]
})
export class HotkeyModule {
  static forRoot(options: IHotkeyOptions = {}): ModuleWithProviders {
    return {
      ngModule : HotkeyModule,
      providers : [
        HotkeysService,
        { provide: HotkeyOptions, useValue: options }
      ]
    };
  }
}
