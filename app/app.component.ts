import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import {User} from './user';

// import { LocalStorageService } from 'angular-2-local-storage';

export class Item{
    name: string;
    age: number;
    gender: string;
    eyeColor: string;
    address: string;
    phone: string;
    email: string;
    company: string;
    about: string;
    balance: string;
    picture: string;
    registered: string;
    tags: string;
    latitude: number;
    longitude: number;
    friends: string;
    greeting: string;
    favoriteFruit: string;

    constructor(name: string, age: number, gender: string, eyeColor: string, address: string, phone: string,
                email: string, company: string, about: string, balance: string, picture: string, registered: string,
                tags: string, latitude: number, longitude: number, friends: string, greeting: string, favoriteFruit: string) {

        this.name = name;
        this.age = age;
        this.gender = gender;
        this.eyeColor = eyeColor;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.company = company;
        this.about = about;
        this.balance = balance;
        this.picture = picture;
        this.registered = registered;
        this.tags = tags;
        this.latitude = latitude;
        this.longitude = longitude;
        this.friends = friends;
        this.greeting = greeting;
        this.favoriteFruit = favoriteFruit;
    }
}

@Component({
    selector: 'participantsoftheevent-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [HttpService]
})
export class AppComponent implements OnInit {
    addRemoveToFavorites(){
        let star = document.querySelector('.favorites');
        star.classList.toggle('favorites-noactive');
        star.classList.toggle('favorites-active');

        if(star.classList.contains('favorites-active')){
            // star.innerHTML = 'в избранном';
            // сохранение в локальное хранилище
            // localStorage.setItem('participantInFavorites', JSON.stringify({ token: token, name: name }));

            //загрузка из локального хранилища
            let participantInFavorites = JSON.parse(localStorage.getItem('participantInFavorites'));
            let token = participantInFavorites.token;
        }
        if(star.classList.contains('favorites-noactive')){
            // star.innerHTML = 'не в избранном';

        }
    }

    user: User;

    constructor(private httpService: HttpService){}

    ngOnInit(){

        this.httpService.getData().subscribe((data: Response) => this.user=data.json());
    }

    items: Item[] =
        [
            { name: "Edith Norman", age: 37, gender: "female", eyeColor: "blue", address: "652 Hubbard Street, Finderne, Northern Mariana Islands, 905", phone: "+1 (985) 554-2597", email: "edithnorman@megall.com", company: "MEGALL", about: "Adipisicing dolore magna veniam amet reprehenderit consectetur. Magna deserunt laboris amet quis excepteur deserunt exercitation fugiat. Ex qui et cupidatat qui aliqua in quis elit.", balance: "$2,542.39",
                 picture: "http://placehold.it/32x32", registered: "2015-11-30T09:36:55 -03:00", tags: "culpa", latitude: -55.336487, longitude: -61.727468, friends: "Tami Fox", greeting: "Hello, Edith Norman! You have 10 unread messages.", favoriteFruit: "banana"},
        ];
    addItem(name: string, age: number, gender: string, eyeColor: string, address: string, phone: string,
            email: string, company: string, about: string, balance: string, picture: string, registered: string,
            tags: string, latitude: number, longitude: number, friends: string, greeting: string, favoriteFruit: string): void {

        if(name==null || name==undefined || name.trim()=="")
            return;
        if(age==null || age==undefined)
            return;
        if(gender==null || gender==undefined || gender.trim()=="")
            return;
        if(eyeColor==null || eyeColor==undefined || eyeColor.trim()=="")
            return;
        if(address==null || address==undefined || address.trim()=="")
            return;
        if(phone==null || phone==undefined || phone.trim()=="")
            return;
        if(email==null || email==undefined || email.trim()=="")
            return;
        if(company==null || company==undefined || company.trim()=="")
            return;
        if(about==null || about==undefined || about.trim()=="")
            return;
        if(balance==null || balance==undefined || balance.trim()=="")
            return;
        if(picture==null || picture==undefined || picture.trim()=="")
            return;
        if(registered==null || registered==undefined || registered.trim()=="")
            return;
        if(tags==null || tags==undefined || tags.trim()=="")
            return;
        if(latitude==null || latitude==undefined)
            return;
        if(longitude==null || longitude==undefined)
            return;
        if(friends==null || friends==undefined || friends.trim()=="")
            return;
        if(greeting==null || greeting==undefined || greeting.trim()=="")
            return;
        if(favoriteFruit==null || favoriteFruit==undefined || favoriteFruit.trim()=="")
            return;
        this.items.push(new Item(name, age, gender, eyeColor, address, phone, email, company, about, balance, picture,
         registered, tags, latitude, longitude, friends, greeting, favoriteFruit));
    }
    // constructor (
    //     private localStorageService: LocalStorageService
    // ) {
    //     // YAY!
    // }
}