import { Component, OnInit } from "@angular/core";
import Dynamsoft from "dwt";
import { WebTwain } from "dwt/dist/types/WebTwain";

@Component({
  selector: "lib-poc-scan-package",
  template: `
    <button (click)="acquireImage()">Acquire Images</button>
    <div id="dwtcontrolContainer"></div>
  `,
  styles: [],
})
export class PocScanPackageComponent implements OnInit {
  containerId = "dwtcontrolContainer";
  DWObject: WebTwain | any = null;

  constructor() {}

  ngOnInit(): void {
    Dynamsoft.DWT.Containers = [
      {
        WebTwainId: "dwtObject",
        ContainerId: this.containerId,
        Width: "300px",
        Height: "400px",
      },
    ];
    Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", () => {
      this.Dynamsoft_OnReady();
    });
    Dynamsoft.DWT.ProductKey = "YOUR-PRODUCT-KEY";
    Dynamsoft.DWT.ResourcesPath = "assets/dwt-resources";
    Dynamsoft.DWT.Load();
  }

  Dynamsoft_OnReady() {
    this.DWObject = Dynamsoft.DWT.GetWebTwain(this.containerId);
  }

  acquireImage() {
    if (this.DWObject) {
      this.DWObject.SelectSourceAsync()
        .then(() => {
          return this.DWObject.AcquireImageAsync({
            IfDisableSourceAfterAcquire: true,
          });
        })
        .then((result: unknown) => {
          console.log(result);
        })
        .catch((exp: { message: unknown }) => {
          console.error(exp.message);
        })
        .finally(() => {
          this.DWObject.CloseSourceAsync().catch((e: unknown) => {
            console.error(e);
          });
        });
    }
  }
}
