import {
  Component,
  Input
} from "angular2/core";

@Component({
  selector: "main-panel",
  template: require("./main-panel.component.html"),
  styles: [require("./main-panel.component.css")]
})
export class MainPanel {
  @Input() heading;
}