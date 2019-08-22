# Angular week 2 Live Coding Workshop
- This was a live coding session to do a recap on some of the content the students covered in angular  CLI week 2.

## Discussed Topics
- Introduction to consuming simple REST APIs.
- Introduction to Routing Module .
- Introduction to Dependency Injection and Services.
- Introduction to HttpModule & HttpClient using promises.
- Passing parameters to routes

## Giphy API
- Read the docs here [https://developers.giphy.com/docs](https://developers.giphy.com/docs)
## 1. Creating App, Navbar and Basic Routing
- Checkout to this branch to see the all the code in this section
```bash
git checkout 1.creating-navbar-and-basic-routing
```
- Link to branch [https://github.com/jakhax/giphy-the-angular-workshop/tree/1.creating-navbar-and-basic-routing](https://github.com/jakhax/giphy-the-angular-workshop/tree/1.creating-navbar-and-basic-routing)
- First we create a navbar then do some basic routing for the home page and a 404 page.
- We did the:
####  Created our app and installed bootstrap 
```bash
ng new giphy
cd giphy
npm install bootstrap
```
**src/styles.css**
```css
@import  '~bootstrap/dist/css/bootstrap.min.css';
```
#### Created the parent component  GiphyComponent
- create `GiphyComponent`
```bash
cd src/app
ng c giphy
```
####  Created basic navbar
- First created navbar component `GiphyNavbarComponent`
```bash
ng g c giphy-navbar
```
**file: src/app/giphy-navbar/giphy-navbar.component.html**
```html
<nav  class="navbar navbar-expand-lg navbar-dark bg-dark">
	<a  class="navbar-brand"  href="#">Giphy</a>
</nav>
```
**file: src/app/app.component.html**
```html
<app-giphy-navbar></app-giphy-navbar>

<div  class="container">
	<router-outlet></router-outlet>
</div>
```
#### created a not-found component
- create a not-found component
	```bash
	ng g c not-found
	```
**file: src/app/not-found/not-found.component.html**
```html
<h2>Error 404</h2>
```

#### Added basic routes
**file: src/app/app-routing.module.ts**
```ts
....
import {GiphyComponent} from  './giphy/giphy.component'
import {NotFoundComponent} from  './not-found/not-found.component';
....
const  routes:  Routes  = [
{"path":"home","component":GiphyComponent},
{"pathMatch":"full","redirectTo":"home","path":"" },
{"path":"**","component":NotFoundComponent},
];
```

## 2. Gif Search Form and Emitting To Parent Component
- Checkout to this branch to see the all the code in this section
```bash
git checkout 2.Gif-Search-Form-and-Emitting-To-Parent-Component
```
- link to branch [https://github.com/jakhax/giphy-the-angular-workshop/tree/2.Gif-Search-Form-and-Emitting-To-Parent-Component](https://github.com/jakhax/giphy-the-angular-workshop/tree/2.Gif-Search-Form-and-Emitting-To-Parent-Component)
- in this section we did the following
### Create A basic gif search form
#### Repo [https://github.com/jakhax/giphy-the-angular-workshop/tree/3e7d79ce457947d81b9acf5328b58ebb6fa68490](https://github.com/jakhax/giphy-the-angular-workshop/tree/3e7d79ce457947d81b9acf5328b58ebb6fa68490)
```bash
ng g c giphy-search-form1.creating-navbar-and-basic-routing
```
- Add the search component to the root component
	-  [https://github.com/jakhax/giphy-the-angular-workshop/blob/3e7d79ce457947d81b9acf5328b58ebb6fa68490/src/app/giphy/giphy.component.html](https://github.com/jakhax/giphy-the-angular-workshop/blob/3e7d79ce457947d81b9acf5328b58ebb6fa68490/src/app/giphy/giphy.component.html)
- Create the search form
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/3e7d79ce457947d81b9acf5328b58ebb6fa68490/src/app/giphy-search-form/giphy-search-form.component.html](https://github.com/jakhax/giphy-the-angular-workshop/blob/3e7d79ce457947d81b9acf5328b58ebb6fa68490/src/app/giphy-search-form/giphy-search-form.component.html)
	
### Bind the Input field to a variable in the component
#### repo : [https://github.com/jakhax/giphy-the-angular-workshop/tree/b5830db38f42639fda96d876f43202b1a3d2c29d](https://github.com/jakhax/giphy-the-angular-workshop/tree/b5830db38f42639fda96d876f43202b1a3d2c29d)
- Import `FormsModule`
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/b5830db38f42639fda96d876f43202b1a3d2c29d/src/app/app.module.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/b5830db38f42639fda96d876f43202b1a3d2c29d/src/app/app.module.ts)
- Create binding variable
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/b5830db38f42639fda96d876f43202b1a3d2c29d/src/app/giphy-search-form/giphy-search-form.component.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/b5830db38f42639fda96d876f43202b1a3d2c29d/src/app/giphy-search-form/giphy-search-form.component.ts)
- `ngModel` binding
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/b5830db38f42639fda96d876f43202b1a3d2c29d/src/app/giphy-search-form/giphy-search-form.component.html](https://github.com/jakhax/giphy-the-angular-workshop/blob/b5830db38f42639fda96d876f43202b1a3d2c29d/src/app/giphy-search-form/giphy-search-form.component.html)

### Emit search event to parent component
#### Repo:  [https://github.com/jakhax/giphy-the-angular-workshop/tree/3b07f6c3850a7eed59debcb641498cbb3737b743](https://github.com/jakhax/giphy-the-angular-workshop/tree/3b07f6c3850a7eed59debcb641498cbb3737b743)
- create event emitter and click function to emit event when button is pressed.
	-  [https://github.com/jakhax/giphy-the-angular-workshop/blob/3b07f6c3850a7eed59debcb641498cbb3737b743/src/app/giphy-search-form/giphy-search-form.component.html](https://github.com/jakhax/giphy-the-angular-workshop/blob/3b07f6c3850a7eed59debcb641498cbb3737b743/src/app/giphy-search-form/giphy-search-form.component.html)
	-  [https://github.com/jakhax/giphy-the-angular-workshop/blob/3b07f6c3850a7eed59debcb641498cbb3737b743/src/app/giphy-search-form/giphy-search-form.component.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/3b07f6c3850a7eed59debcb641498cbb3737b743/src/app/giphy-search-form/giphy-search-form.component.ts)
-  Get event in parent component and console log search input.
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/3b07f6c3850a7eed59debcb641498cbb3737b743/src/app/giphy/giphy.component.html](https://github.com/jakhax/giphy-the-angular-workshop/blob/3b07f6c3850a7eed59debcb641498cbb3737b743/src/app/giphy/giphy.component.html)
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/3b07f6c3850a7eed59debcb641498cbb3737b743/src/app/giphy/giphy.component.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/3b07f6c3850a7eed59debcb641498cbb3737b743/src/app/giphy/giphy.component.ts)


## 3.  Creating a  http service for giphy and store results from API
- Checkout to this branch to see the all the code in this section
```bash
git checkout 3.Create-http-service-for-giphy]
```
- link to repo [https://github.com/jakhax/giphy-the-angular-workshop/tree/3.Create-http-service-for-giphy](https://github.com/jakhax/giphy-the-angular-workshop/tree/3.Create-http-service-for-giphy)
- In this section we did the following
### Create  Service, Inject to Parent Component
#### repo: [https://github.com/jakhax/giphy-the-angular-workshop/tree/6cbe245389314497d6edb37d12d40729b0cbeaae](https://github.com/jakhax/giphy-the-angular-workshop/tree/6cbe245389314497d6edb37d12d40729b0cbeaae)
```bash
ng g s services/giphy-http-service
```
- create method `searchGiphies` in service
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/6cbe245389314497d6edb37d12d40729b0cbeaae/src/app/services/giphy-http-service.service.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/6cbe245389314497d6edb37d12d40729b0cbeaae/src/app/services/giphy-http-service.service.ts)
- Inject service to parent component.
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/6cbe245389314497d6edb37d12d40729b0cbeaae/src/app/giphy/giphy.component.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/6cbe245389314497d6edb37d12d40729b0cbeaae/src/app/giphy/giphy.component.ts)

### Import httpmodule and make http request with promise.
#### Repo:[https://github.com/jakhax/giphy-the-angular-workshop/tree/4b9435a6990bcb952e1a1b9a697acc5e2b7b1a34](https://github.com/jakhax/giphy-the-angular-workshop/tree/4b9435a6990bcb952e1a1b9a697acc5e2b7b1a34)
- import 	`HttpClientModule`
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/4b9435a6990bcb952e1a1b9a697acc5e2b7b1a34/src/app/app.module.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/4b9435a6990bcb952e1a1b9a697acc5e2b7b1a34/src/app/app.module.ts)
- Add api key to environment (generate your own api key!!!)
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/4b9435a6990bcb952e1a1b9a697acc5e2b7b1a34/src/environments/environment.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/4b9435a6990bcb952e1a1b9a697acc5e2b7b1a34/src/environments/environment.ts)
- Make API request using promise and console log results. 
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/4b9435a6990bcb952e1a1b9a697acc5e2b7b1a34/src/app/services/giphy-http-service.service.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/4b9435a6990bcb952e1a1b9a697acc5e2b7b1a34/src/app/services/giphy-http-service.service.ts) 

### Store results from API
#### Repo:[https://github.com/jakhax/giphy-the-angular-workshop/tree/7069cd163b0c8945404d6324747ebc42c3356d12](https://github.com/jakhax/giphy-the-angular-workshop/tree/7069cd163b0c8945404d6324747ebc42c3356d12)
- Create Class `Giphy` to store `url` of `fixed_height` gif.
	-  [https://github.com/jakhax/giphy-the-angular-workshop/blob/7069cd163b0c8945404d6324747ebc42c3356d12/src/app/giphy.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/7069cd163b0c8945404d6324747ebc42c3356d12/src/app/giphy.ts)
- Create an array `Giphy[]`  and store the response in the array.
	-  [https://github.com/jakhax/giphy-the-angular-workshop/blob/7069cd163b0c8945404d6324747ebc42c3356d12/src/app/services/giphy-http-service.service.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/7069cd163b0c8945404d6324747ebc42c3356d12/src/app/services/giphy-http-service.service.ts)
- Once the promise resolves copy the data from the service to the parent component.
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/7069cd163b0c8945404d6324747ebc42c3356d12/src/app/giphy/giphy.component.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/7069cd163b0c8945404d6324747ebc42c3356d12/src/app/giphy/giphy.component.ts)

## 4. Displaying results
### Display search results and show default gifs on homepage
### Repo: [https://github.com/jakhax/giphy-the-angular-workshop/tree/2550addc9a7c4a363d7bf4eb8ffabb9d23bc7f40](https://github.com/jakhax/giphy-the-angular-workshop/tree/2550addc9a7c4a363d7bf4eb8ffabb9d23bc7f40)
- Add a search for `lion king` gifs on `ngOnInit` life cycle hook of the parent component to search when the component loads.
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/2550addc9a7c4a363d7bf4eb8ffabb9d23bc7f40/src/app/giphy/giphy.component.ts](https://github.com/jakhax/giphy-the-angular-workshop/blob/2550addc9a7c4a363d7bf4eb8ffabb9d23bc7f40/src/app/giphy/giphy.component.ts)
- Display search results when available.
	- [https://github.com/jakhax/giphy-the-angular-workshop/blob/2550addc9a7c4a363d7bf4eb8ffabb9d23bc7f40/src/app/giphy/giphy.component.html](https://github.com/jakhax/giphy-the-angular-workshop/blob/2550addc9a7c4a363d7bf4eb8ffabb9d23bc7f40/src/app/giphy/giphy.component.html)

## Resources
- todo


