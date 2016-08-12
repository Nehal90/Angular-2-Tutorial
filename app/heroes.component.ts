import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html' ,
    styleUrls: ['app/heroes.component.css']	
})

export class HeroesComponent implements OnInit{ 
	
	title = 'My Heroes';

 	heroes: Hero[];

	selectedHero: Hero;

	constructor(private heroService: HeroService,
				private router: Router){

	}

	getHeroes(){
		this.heroService.getHeroes()
		.then(heroes => this.heroes = heroes);	
	}

	onSelect(hero: Hero){
		this.selectedHero = hero;
	}

	ngOnInit(){
		this.getHeroes();
	}

	gotoDetail() {
    	this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
