import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    			<ul class="heroes">
	    			<li *ngFor="let hero of heroes" 
	    			[class.selected]="hero === selectedHero"	
	    			(click)="onSelect(hero)">
	  					<span class="badge">{{hero.id}}</span> {{hero.name}}
					</li>
				</ul>
				<my-hero-detail [hero]="selectedHero"></my-hero-detail>
    			`,
    providers: [HeroService],
    styleUrls: ['app/heroes.component.css']	
})

export class AppComponent implements OnInit{ 
	
	title = 'Tour of Heroes';

 	heroes: Hero[];

	selectedHero: Hero;

	constructor(private heroService: HeroService){

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

}
