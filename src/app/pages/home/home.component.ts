import { Component, OnInit } from '@angular/core';
import { Ng2FileInputService, Ng2FileInputAction } from 'ng2-file-input';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  public onAction(event: any) {
    console.log(event);
    console.log(this.getFileNames(event.currentFiles));
  }

  public onAdded(event: any) {
    console.log('FileInput: ' + event.id);
    console.log('Action: File added');
  }

  private getFileNames(files: File[]): string {
    const names = files.map(file => file.name);
    return names ? names.join(', ') : 'No files currently added.';
  }
}
