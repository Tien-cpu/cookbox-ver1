import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from '../../Services/dish.service';
import { Dish } from 'src/app/Models/Dish';
import { dishpage } from '../../Models/AdminDishPageModel';
import { UploadService } from '../../Services/uploadfile.service';
import { categorypage } from '../../Models/AdminCatergoryPageModel'
import { Category } from '../../Models/Category'
import { CategoryService } from '../../Services/category.service';
import { Metarialpage } from '../../Models/AdminMetarials';
import { Metarial } from '../../Models/Metarials';
import { NutrientsService } from '../../Services/nutrients.service';
import { TastesService } from '../../Services/tastes.service';
import { Nutrients } from '../../Models/AdminNutrientsPageModel'
import { Tastes } from '../../Models/AdminTastesPageModel'
import { DishChild } from 'src/app/Models/DishChild';
@Component({
  selector: 'app-update-product-page',
  templateUrl: './update-product-page-child.component.html',
  styleUrls: ['../common_asset_page/css/material-dashboard-rtl.css',
  '../common_asset_page/css/material-dashboard.css',
  './update-product-page-child.component.css']
})
export class UpdateChildProductPageComponent implements OnInit {

  constructor(private router: Router , private categoryService: CategoryService, private dishService : DishService, private uploadService: UploadService ,private tastesService: TastesService ,
    private nutrientsService: NutrientsService ,  ) { }
  ListCategory: Category[] = []  
  showDropDown:boolean = true;
  displayddl:string = 'block';
  displayddl2:string = 'none';
  displayddl3:string = 'none';
  activeddl:string= 'active';
  activeddl2:string= '';
  activeddl3:string= '';

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
  ListMet : Metarial[] = [];
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
  public dish : DishChild = {
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
    taste_details: [],
    list_child:[]
  };
  ListNutrients : {"id": number,"name": string,}[] = [];
  ListTastes : {"id": number,"name": string,}[] = [];
  public selectstatus: string = '';
  public selectcategory: any;
  public currentrepices : number = 1; 
  public maxrepices : number = 1; 
  fileChangeEvent(event:any){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        this.uploadService.upload(file).subscribe(
          response => {

              console.log("dep"+response)
              this.dish.image = response

         }, error => {
           console.log("lỗi lòi lôn"+error.status)
         }
        );
    }
  }
  ngOnInit(): void {
    let id : number = Number(sessionStorage.getItem('dishid'));
      this.dishService.getAStore(id).subscribe((data: Dish) => {
        this.dish = data
        this.maxrepices = data.repices.length;
        this.selectstatus = this.dish.status?'open':'close';
        this.selectcategory = this.dish.category_id;
      });
      this.categoryService.getDataPageCategory().subscribe((data : categorypage ) => {
        this.ListCategory = data.items;
      });
      this.dishService.getMetarial().subscribe((data : Metarialpage) => {
        this.ListMet = data.items
      });
      this.nutrientsService.getDataPageNutrients().subscribe((data : Metarialpage) => {
        this.ListNutrients = data.items
      });
      this.tastesService.getDataPageTastes().subscribe((data : Metarialpage) => {
        this.ListTastes = data.items
      });
  }
  public removingingredients(ind : number){
    this.dish.dish_ingredients.splice(ind, 1);
  }
  public removingnutrient(ind : number){
    this.dish.nutrient_details.splice(ind, 1);
  }
  public removingtaste_level(ind : number){
    this.dish.taste_details.splice(ind, 1);
  }
  public addingtaste_level(){
    this.dish.taste_details.push({
      taste_id:0,
      taste_level:1,
      taste_name:''
    })
    console.log(this.dish)
  }
  public addingnutrient(){
    this.dish.nutrient_details.push({
      id:0,
      nutrient_id:0,
      amount:1,
      dish_id:1,
      nutrient_name:''
    })
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
    addingrepices(){
    this.dish.repices.push(
      {
        id: this.dish.repices.length,
        dishId: this.dish.id,
        steps: []
      }
    )
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
  UpdateDish(){
    this.dishService.updateDishChild(this.dish).subscribe((data) => {this.router.navigate(['product-page-child'])},(error:any) => (
      console.log(error)
    ))
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
