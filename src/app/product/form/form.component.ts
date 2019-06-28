import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { NotifierService } from 'angular-notifier';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  product: Product;
  form: FormGroup;
  

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router,
    private notifierService: NotifierService
    
    ) { 
    this.product = new Product();
    this.form = fb.group({
      name: ['', Validators.compose(
        [
          Validators.required, 
          Validators.minLength(4)
        ]
      )],
      value: ['', Validators.compose(
        [
        Validators.required, 
          Validators.maxLength(6)
        ]
      )],
      url: ['',Validators.required],
      description:['', Validators.compose(
        [
          Validators.required, Validators.minLength(10),
          Validators.maxLength(80)
        ]
      )],
    });
  }

  ngOnInit() {
   
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.productService.findById(id).subscribe(product => {
          this.product = product;
        })
      }
    });
    
  }

  
  save(){
    this.productService.save(this.product).subscribe(response => {
      this.notifierService.notify( 'success', 'Produto salvo com sucesso!' );
      this.router.navigate(['']);
    });
  }

}
