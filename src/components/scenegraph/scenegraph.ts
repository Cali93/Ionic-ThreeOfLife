import { Component, Input, ElementRef } from '@angular/core';
import * as THREE from 'three-of-life';


@Component({
  selector: 'scenegraph',
  template: '<div style="width:100%; height:100%"></div>'
})
export class SceneGraph {

  @Input()

  constructor() {
  }

  ngAfterViewInit() {

    }


  }
