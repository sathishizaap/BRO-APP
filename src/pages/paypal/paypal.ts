import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration  } from '@ionic-native/paypal';
/**
 * Generated class for the PaypalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paypal',
  templateUrl: 'paypal.html',
})
export class PaypalPage {

	payment: PayPalPayment = new PayPalPayment('100', 'USD', 'TV', 'sale');
    currencies = ['EUR', 'USD']

   constructor(private payPal: PayPal) {
   	
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaypalPage');
  }
 payPalEnvironment: string = 'payPalEnvironmentSandbox'; 

  makePayment() {
		this.payPal.init({
			PayPalEnvironmentProduction: '',
			PayPalEnvironmentSandbox: 'ApDCL9LP3CV-xSZawVklqt3QIExYAOfijWi1DB6XXg3Q60d.vQepD8p.'
		}).then(() => {
			this.payPal.prepareToRender(this.payPalEnvironment, new PayPalConfiguration({})).then(() => {
				this.payPal.renderSinglePaymentUI(this.payment).then((response) => {
					alert(`Successfully paid. Status = ${response.response.state}`);
					console.log(response);
				}, () => {
					console.error('Error or render dialog closed without being successful');
				});
			}, () => {
				console.error('Error in configuration');
			});
		}, () => {
			console.error('Error in initialization, maybe PayPal isn\'t supported or something else');
		});
	}

}
