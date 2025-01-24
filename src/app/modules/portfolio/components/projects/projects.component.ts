import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interfaces';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]> ([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Sistema de Vendas',
      title: 'Sistema de Vendas - ASP.Net MVC',
      with: '100px',
      height: '51px',
      description: '<p>Sistema de vendas construido utilizando ASP.Net MVC e Entity Framework. Projeto foi construido junto ao professor Nelio Alves, com o intuito de aplicar o conteúdo aprendido no decorrer do curso.</p>',
      links: [
        {
          name: 'Código do Projeto',
          href: 'https://github.com/Viniciushp00/VendasWebMvc/'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Xadrez no Console',
      title: 'Xadrez no Console - C#',
      with: '100px',
      height: '51px',
      description: '<p>Jogo de Xadrez que desenvolvi junto ao Professor Nelio Alves, no curso de Programação Orientada a Objeto (POO). A proposta principal é aplicar o conteúdo aprendido no decorrer do curso para criar um jogo de Xadrez que rodasse no console.</p>',
      links: [
        {
          name: 'Código do Projeto',
          href: 'https://github.com/Viniciushp00/Xadrez-em-CSharp'
        }
      ]
    }
  ])

  public openDialog (data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
