import { NgModule, ModuleWithProviders } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { CheatSheetComponent } from './directives/cheatsheet.component';
import { Hotkeys } from './directives/hotkeys.directive';
import { HotkeysService } from './services/hotkeys.service';
import { HotkeyOptions, IHotkeyOptions } from './models/hotkey.options';

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  exports: [
    Hotkeys,
    // CheatSheetComponent,
  ],
  declarations: [
    Hotkeys,
    // CheatSheetComponent,
  ],
  providers: [
    HotkeysService,
    { provide: HotkeyOptions, useValue: HotkeyOptions }
  ]
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
