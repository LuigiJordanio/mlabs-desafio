import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Required } from 'src/app/@shared/decorators/required.decorator';

@Component({
  selector: 'mlb-form-input-droppable',
  templateUrl: './mlb-form-input-droppable.component.html',
  styleUrls: ['./mlb-form-input-droppable.component.scss']
})
export class MlbFormInputDroppableComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;

  @Required()
  @Input('mlb-name') name?: string;


  @Input('mlb-limit-files') limitFiles: number = 1;

  @Input('mlb-type-files') typeFiles?: string[] | string;

  public isDragenter: boolean = false;



  public dropedFile(event: DragEvent): void {
    event.preventDefault();
    const filesReceived = event.dataTransfer?.files;

    this.verifyQntFiles(filesReceived?.length);
    this.dragToggle();
  }

  public verifyQntFiles(filesReceived?: number) {

    if (!(filesReceived == this.limitFiles)) {
      const messageError = `Apenas ${this.limitFiles} deve(m) ser inserido(s)`;
      alert(messageError);
      throw new Error(messageError);
    }
  }

  public dragToggle(): void {
    this.isDragenter = !this.isDragenter;
  }

  public draggedOverFile(event: DragEvent): void {
    event.preventDefault();
  }

}
