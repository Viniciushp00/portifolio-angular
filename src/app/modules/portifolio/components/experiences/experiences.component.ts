import { Component, signal } from '@angular/core';

//Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong: 'Assistente de Sistemas',
        p: 'Even Construtora | Nov 2021 - Presente'
      },
      text: '<p>Desde novembro de 2021 ...</p>'
    },
    {
      summary:{
        strong: 'Jovem Aprendiz',
        p: 'Asam | Aug 2020 - Nov 2021'
      },
      text: '<p>Desde agosto de 2020 ...</p>'
    }
  ])
}
