import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  @Output('mlb-select-image') selectImage: EventEmitter<string> = new EventEmitter<string>();

  public isDragenter: boolean = false;

  constructor(private domSanitizer: DomSanitizer){}

  public dropedFile(event: DragEvent): void {

    event.preventDefault();
    const filesReceived = event.dataTransfer!.files;

    this.verifyQntFiles(filesReceived?.length);
    this.verifyTypeFile(filesReceived[0]);
    this.emitImage(URL.createObjectURL(filesReceived[0]));
    this.dragToggle();
  }

  public verifyQntFiles(qntFilesReceived?: number) {

    if (!(qntFilesReceived == this.limitFiles)) {
      const messageError = `Apenas ${this.limitFiles} deve(m) ser inserido(s)`;
      alert(messageError);
      throw new Error(messageError);
    }
  }

  public verifyTypeFile(typeFileReceived:File) {

    if (!(typeFileReceived.type.startsWith('image/'))) {
      const messageError = `O arquivo deve ser uma imagem`;
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

  public emitImage(value:string){
    this.selectImage!.emit(value);
  }

  public selectForInput(event:any){
    const fileReceived = event.target.files[0];

    this.verifyTypeFile(fileReceived);
    this.emitImage(URL.createObjectURL(fileReceived));
  }

}
