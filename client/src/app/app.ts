import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavBar } from "./nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected title = 'Sports Center';
  products: any[] = [];
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http
      .get<ProductData>("http://localhost:8080/api/products")
      .subscribe({
        next: (data)=>{
          this.products = data.content;
        },
        error:(error)=>{
          console.log("Error fetching data: ",error);
        }
      });
  }
}

interface ProductData{
  content: any[];
}
