import {Component} from "angular2/core";
import {MainPanel} from "./panel/main-panel.component";

@Component({
  selector: "sandbox-app",
  template: require("./app.html"),
  styles: [require('./app.css')],
  directives: [
    MainPanel
  ]
})
export class SandboxApp {
  title: string = "Main Panel";
}
// bootstrap(SandboxApp).catch(err => console.error(err));