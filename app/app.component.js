"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_service_1 = require("./http.service");
// import { LocalStorageService } from 'angular-2-local-storage';
var Item = (function () {
    function Item(name, age, gender, eyeColor, address, phone, email, company, about, balance, picture, registered, tags, latitude, longitude, friends, greeting, favoriteFruit) {
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
    return Item;
}());
exports.Item = Item;
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.items = [
            { name: "Edith Norman", age: 37, gender: "female", eyeColor: "blue", address: "652 Hubbard Street, Finderne, Northern Mariana Islands, 905", phone: "+1 (985) 554-2597", email: "edithnorman@megall.com", company: "MEGALL", about: "Adipisicing dolore magna veniam amet reprehenderit consectetur. Magna deserunt laboris amet quis excepteur deserunt exercitation fugiat. Ex qui et cupidatat qui aliqua in quis elit.", balance: "$2,542.39",
                picture: "http://placehold.it/32x32", registered: "2015-11-30T09:36:55 -03:00", tags: "culpa", latitude: -55.336487, longitude: -61.727468, friends: "Tami Fox", greeting: "Hello, Edith Norman! You have 10 unread messages.", favoriteFruit: "banana" },
        ];
    }
    AppComponent.prototype.addRemoveToFavorites = function () {
        var star = document.querySelector('.favorites');
        star.classList.toggle('favorites-noactive');
        star.classList.toggle('favorites-active');
        if (star.classList.contains('favorites-active')) {
            // star.innerHTML = 'в избранном';
            // сохранение в локальное хранилище
            // localStorage.setItem('participantInFavorites', JSON.stringify({ token: token, name: name }));
            //загрузка из локального хранилища
            var participantInFavorites = JSON.parse(localStorage.getItem('participantInFavorites'));
            var token = participantInFavorites.token;
        }
        if (star.classList.contains('favorites-noactive')) {
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData().subscribe(function (data) { return _this.user = data.json(); });
    };
    AppComponent.prototype.addItem = function (name, age, gender, eyeColor, address, phone, email, company, about, balance, picture, registered, tags, latitude, longitude, friends, greeting, favoriteFruit) {
        if (name == null || name == undefined || name.trim() == "")
            return;
        if (age == null || age == undefined)
            return;
        if (gender == null || gender == undefined || gender.trim() == "")
            return;
        if (eyeColor == null || eyeColor == undefined || eyeColor.trim() == "")
            return;
        if (address == null || address == undefined || address.trim() == "")
            return;
        if (phone == null || phone == undefined || phone.trim() == "")
            return;
        if (email == null || email == undefined || email.trim() == "")
            return;
        if (company == null || company == undefined || company.trim() == "")
            return;
        if (about == null || about == undefined || about.trim() == "")
            return;
        if (balance == null || balance == undefined || balance.trim() == "")
            return;
        if (picture == null || picture == undefined || picture.trim() == "")
            return;
        if (registered == null || registered == undefined || registered.trim() == "")
            return;
        if (tags == null || tags == undefined || tags.trim() == "")
            return;
        if (latitude == null || latitude == undefined)
            return;
        if (longitude == null || longitude == undefined)
            return;
        if (friends == null || friends == undefined || friends.trim() == "")
            return;
        if (greeting == null || greeting == undefined || greeting.trim() == "")
            return;
        if (favoriteFruit == null || favoriteFruit == undefined || favoriteFruit.trim() == "")
            return;
        this.items.push(new Item(name, age, gender, eyeColor, address, phone, email, company, about, balance, picture, registered, tags, latitude, longitude, friends, greeting, favoriteFruit));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'participantsoftheevent-app',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css'],
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map