import { Component} from '@angular/core';
import { UserService } from '../services/user.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.page.html',
  styleUrls: ['./dashboard-user.page.scss'],
})
export class DashboardUserPage {

  imageUrl = ''
  public user = {email: '', userName:'', role:'', image:'', uid:''}
  public type = 0
  public type0 = true
  public type1 = false
  public type2 = false
  public isAdmin = false

  constructor(public  userService: UserService,shp: ShoppingCartService, router: Router){
    
    var data = sessionStorage.getItem('userData')
    !data?router.navigate(['']):null
    data? this.user = JSON.parse(data):null
    this.user.role=='admin'?this.isAdmin=true:null 
    shp.updateUserData()
    
  }

  typeF(number:number, a0:Element,a1:Element,a2:Element){
    this.type = number
    switch (number) {
      case 0:
          this.type0 = true
          this.type1 = false
          this.type2 = false
          a0.classList.add('active')
          a1.classList.remove('active')
          a2.classList.remove('active')
        break;
      case 1:
          this.type0 = false
          this.type1 = true
          this.type2 = false
          a0.classList.remove('active')
          a1.classList.add('active')
          a2.classList.remove('active')
        break; 
      case 2:
          this.type0 = false
          this.type1 = false
          this.type2 = true
          a0.classList.remove('active')
          a1.classList.remove('active')
          a2.classList.add('active')
        break;  
      default:
        break;
    }

  }

  onChildButtonClicked() {
    var data = sessionStorage.getItem('userData')
    data? this.user = JSON.parse(data):null
  }


  showCategoryMov(i: boolean) {
    const aside: any = document.querySelector("#aside")
    i ? aside.style = "display:block;" : aside.style = "display:none;"
  }
}
