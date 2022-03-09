import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Required } from 'src/app/@shared/decorators/required.decorator';
import { Emoji } from '../mlb-form.types';

@Component({
  selector: 'mlb-form-textarea',
  templateUrl: './mlb-form-textarea.component.html',
  styleUrls: ['./mlb-form-textarea.component.scss']
})
export class MlbFormTextareaComponent implements OnInit {


  @Required()
  @Input('mlb-name') name!: string;

  @Input('mlb-placeholder') placeholder?: string;

  @ViewChild('textarea') textarea!: ElementRef;

  @Input('mlb-has-emoji') hasEmoji: boolean = true;

  public emojiWindowsIsOpen: boolean = false;

  @Output('mlb-select-emoji') emitEmoji?: EventEmitter<string> = new EventEmitter<string>();



  ngOnInit(): void {
  }

  public toggleEmojiWindow() {
    this.emojiWindowsIsOpen = !this.emojiWindowsIsOpen;
  }

  public selectEmoji({ emoji: { native } }: Emoji) {
    this.textarea.nativeElement.value += native;
    this.emitEmoji?.emit(native);
  }

}
