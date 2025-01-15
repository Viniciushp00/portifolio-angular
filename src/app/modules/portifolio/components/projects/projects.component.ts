import { Component, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interfaces';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]> ([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      with: '100px',
      height: '51px',
      description: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid accusantium asperiores officia rerum laudantium, quasi adipisci ut perspiciatis eos vitae doloribus modi vero quis sapiente earum blanditiis illo ducimus.</p>',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://tracker.gg/valorant/profile/riot/i%20die%20for%20her%23BR01/matches'
        }
      ]
    }
  ])
}
