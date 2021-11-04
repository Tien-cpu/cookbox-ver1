import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from '../../Services/dish.service';
import { UploadService } from '../../Services/uploadfile.service';
import { Dish } from 'src/app/Models/Dish';
import { dishpage } from '../../Models/AdminDishPageModel';
import { categorypage } from '../../Models/AdminCatergoryPageModel'
import { Category } from '../../Models/Category'
import { CategoryService } from '../../Services/category.service';
import { Metarialpage } from '../../Models/AdminMetarials';
import { Metarial } from '../../Models/Metarials';
import { FormBuilder, FormGroup } from '@angular/forms';

// class ImageSnippet {
//   constructor(public src: string, public file: File) {}
// }
@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product-page.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',
  './create-product-page.component.css']
})
export class CreateProductPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router , private categoryService: CategoryService, private dishService : DishService, private uploadService: UploadService ) { }
  ListCategory: Category[] = []  
  uploadForm: any;  
  showDropDown:boolean = true;
  displayddl:string = 'block';
  displayddl2:string = 'none';
  displayddl3:string = 'none';
  activeddl:string= 'active';
  activeddl2:string= '';
  activeddl3:string= '';
  ListMet : Metarial[] = [];
  opentab(tab:String){
    console.log(this.dish)
    if(tab === 'ThongTin'){
      this.displayddl = 'block';
      this.displayddl2 = 'none';
      this.displayddl3 = 'none';
      this.activeddl = 'active';
      this.activeddl2 = '';
      this.activeddl3 = '';
    }else if(tab === 'ThanhPhan'){
      this.displayddl = 'none';
      this.displayddl2 = 'block';
      this.displayddl3 = 'none';
      this.activeddl = '';
      this.activeddl2 = 'active';
      this.activeddl3 = '';
    }else if(tab === 'TienHanh'){
      this.displayddl = 'none';
      this.displayddl2 = 'none';
      this.displayddl3 = 'block';
      this.activeddl = '';
      this.activeddl2 = '';
      this.activeddl3 = 'active';
    }
    // this.showDropDown = !this.showDropDown;
    // this.displayddl = this.showDropDown ? "inline" : "none";
    // this.displayddl2 = ! this.showDropDown ? "inline" : "none";
  }
  ListStatus: {
    "value" : string,
    "key": string,
    "class" : string
  }[] = [
    
    {
      key: 'close',
      value: 'Ngừng Hoạt Đọng',
      class: ''
    },
    {
      key: 'open',
      value: 'Hoạt Đọng',
      class: 'selected'
    },
  ]
  public dish : Dish = {
    id:0,
    category_id:0,
    category_name:'',
    description:'',
    image:'',
    name:'',
    parent_id:0,
    status:true,
    dish_ingredients:[],
    nutrient_details:[],
    repices:[],
    taste_details: []
  };
  public selectstatus: string = '';
  public selectcategory: any;
  public currentrepices : number = 1; 
  public maxrepices : number = 1; 
  ngOnInit(): void {
    let id : number = Number(sessionStorage.getItem('dishid'));
      this.categoryService.getDataPageCategory().subscribe((data : categorypage ) => {
        this.ListCategory = data.items;
      });
      this.dishService.getMetarial().subscribe((data : Metarialpage) => {
        this.ListMet = data.items
      });
      this.uploadForm = this.formBuilder.group({
        profile: ['']
      });
  }
  fileChangeEvent(event:any){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        this.uploadService.onSubmit(file).subscribe((data) =>{
          console.log(data)
          this.dish.image = data
        }
        );
    }
    // const target = event.target as HTMLInputElement;
    //   const files = target.files as FileList;
    //   this.uploadService.upload(files).subscribe((data) => {
    //     console.log(data)
    //   })
    //   // console.log(files);
  }
  public addingredients(){
    this.dish.dish_ingredients.push({
      id:0,
      dish_id:this.dish.id,
      metarial_id:0,
      metarial_name:'',
      quantity:0
    })
  }
  public addingStep(id : number){
    console.log(id)
    this.dish.repices.forEach((data) => {
      if(
        data.id == id
      )
      {
        data.steps.push({
          id : 0,
          description: '',
          repiceId: data.id
        })
      }
    })
  }
  onChangeStatus() {
    console.log(this.dish)
    if(this.selectstatus == 'close'){
      this.dish.status = false;
    } else if (this.selectstatus == 'open') {
      this.dish.status = true;
    } else if (this.selectstatus == 'all') {
    }
  }
  onChangeCategory() {
    this.dish.category_id = this.selectcategory
    this.ListCategory.forEach((data) => {
      if(data.id == this.selectcategory){
        this.dish.category_name = data.name
      }
    })
  }
  addingrepices(){
    this.dish.repices.push(
      {
        id: this.dish.repices.length,
        dishId: this.dish.id,
        steps: []
      }
    )
  }
  createDish(){
    this.dishService.insertStore(this.dish).subscribe((data) => {
      this.router.navigate(['product-page']);
    },(error:any) => {
      console.log(error)
      
    })
  }
  public previousPices(){

  }
  public nextPage(){
    
  }
  goHomePage(){
    this.router.navigate(['home']);
  }
  goProducpage(){
    this.router.navigate(['product-page']);
  }
  goEmployeePage(){
    this.router.navigate(['employee-page']);
  }
  goUserPage(){
    this.router.navigate(['user-page']);
  }
  goMaterialPage(){
    this.router.navigate(['material-page']);
  }
  goHistoryMaterialPage(){
    this.router.navigate(['history-material-page']);
  }
  goOrderPage(){
    this.router.navigate(['order-left-page']);
  }
  goMenuPage(){
    this.router.navigate(['menu-left-page']);
  }

}

