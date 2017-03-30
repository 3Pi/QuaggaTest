import { Component, OnInit }       from '@angular/core';

import Quagga from 'quagga';

@Component({
	selector: 'quaggaTest'
	
	,templateUrl: 'static/app.component.html'
})

export class AppComponent implements OnInit {
	CameraIsAvailable: boolean = false;

	quaggaConfig = {
		locator: {
			patchSize: "medium",
			halfSample: false
		},
		numOfWorkers: 1,
		decoder: {
			readers: ['ean_reader']
		},
		locate: true,
		inputStream: {
			type: "LiveStream",
			constraints: {
				width: 640,
				height: 480,
				facingMode: "environment",
				aspectRatio: 1
				}
		},
	};
	constructor( ) {}

	ngOnInit() {
		console.log('onInit de AppComponent');

		this.CameraIsAvailable = (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function');

		if (this.CameraIsAvailable) {
			Quagga.init(this.quaggaConfig,  (err) => {
				if (err) {
					console.log(err);
					return
				}
				console.log("Initialization finished. Ready to start");
				Quagga.start();
			});
		}

	}
}
