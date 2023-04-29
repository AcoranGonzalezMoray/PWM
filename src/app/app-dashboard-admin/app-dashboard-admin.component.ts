import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { DashboardAdminService } from '../services/firestore/dashboard-admin.service';
import { Order } from '../services/firestore/interfaces/order';
import { User } from '../services/firestore/interfaces/user';
import { Reserve } from '../services/firestore/interfaces/reserve';

@Component({
  selector: 'app-app-dashboard-admin',
  templateUrl: './app-dashboard-admin.component.html',
  styleUrls: ['./app-dashboard-admin.component.css']
})

export class AppDashboardAdminComponent {

  public users: Observable<User[]>
  public numberOfUsers: number | undefined
  public orders: Observable<Order[]>
  public numberOfOrders: number | undefined
  public reservations: Observable<Reserve[]>
  public numberOfReservations: number | undefined
  public selectedOrder: Order | undefined;
  public showOrderDetails = false;

  constructor(private dashboardAdminService: DashboardAdminService) {
    this.users = this.dashboardAdminService.getUsers()
    this.orders = this.dashboardAdminService.getOrders()
    this.reservations = this.dashboardAdminService.getReservations()
  }

  ngOnInit() {
    this.dashboardAdminService.getNumberOfUsers().subscribe(numberOfUsers => {
      this.numberOfUsers = numberOfUsers;
    });
    this.dashboardAdminService.getNumberOfOrders().subscribe(numberOfOrders => {
      this.numberOfOrders = numberOfOrders;
    });
    this.dashboardAdminService.getNumberOfReservations().subscribe(numberOfReservations => {
      this.numberOfReservations = numberOfReservations;
    });

    //this.usersCollection = this.firestore.collection<User>('USUARIOS').valueChanges();
    //
    //     this.firestore.collection<User>('USUARIOS').get().subscribe(snapshot => {
    //       snapshot.forEach(doc => {
    //         const user = doc.data() as User;
    //         this.reservas.push(user.reservations.every);
    //       });
    //     });
  }

  getshowOrderDetails(order: Order) {
    this.selectedOrder = order;
    this.showOrderDetails = true;
  }

  hideOrderDetails() {
    this.showOrderDetails = false;
  }
}
