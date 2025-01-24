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
        strong: 'Assistente TI - Sistemas/Desenvolvimento',
        p: 'Even Construtora | Mar 2022 - Presente'
      },
      text: '<p>Em março de 2022 fui promovido para analista, onde recebi novas responsábilidades, como por exemplo, condução de projetos maiores, o que incluiu a tratativa com as empresas terceiras e áreas envolvidas, para realizar a coleta de requisitos, organização da subida, construção de scripts SQL e homologação da melhoria. Por conta dessas novas resposábilidades comecei a entender mais no detalhe como as aplicações funcionavam e todas as preocupações que se deve ter para manter a sustentação dos sistemas.</p> <p>E em maio de 2024, recebi o convite do meu gestor para começar a atuar na área de desenvolvimento, onde trabalho com projetos .Net e Angular, realizando o desenvolvimento de melhorias e projetos solicitados pelas áreas da empresa. Por conta dessa oportunidade consegui inicar carreira na área de desenvolvimento, sei que tenho um caminho muito longo para trilhar na área, mas a cada dia que passo fico mais apaixonado pela minha profissão.</p>'
    },
    {
      summary:{
        strong: 'Auxiliar TI - Sistemas',
        p: 'Even Construtora | Mai 2022 - Mar de 2023'
      },
      text: '<p>Em maio de 2021 recebi uma oportunidade para migrar para a área de Sistemas da Even, e sem pensar duas vezes aceitei o desafio, pois tinha o sonho de trabalhar na área de TI. Nesse cargo, fiquei responsável pelo atendimento de chamados N2 voltados para os sistemas de interação com o cliente (Exemplo: CRM, Portal/App do Cliente, Sistema de Gestão de Carteira, dentre outros), pela documentação/organização das atualizações realizadas e pelo seguimento de demandas/projetos menores.</p> <p>Nesse cargo, tive minha primeira experiencia com o TI o que me fez ficar apaixonado pela área, e em conjunto com a faculdade aprendi muito sobre sustentação de aplicações e como funciona o desenvolvimento de melhorias dos softwares. E por conta disso, comecei a buscar mais conhecimento sobre programação em cursos e na propria faculdade.</p>'
    },
    {
      summary:{
        strong: 'Auxiliar Administrativo',
        p: 'Even Construtora | Nov 2021 - Abr 2022'
      },
      text: '<p>A partir de novembro de 2021, fui efetivado na Even, entrando como auxiliar administrativo na área de clientes, com isso ganhei novas responsábilidades, como contato com a obra para disponibilização e recebimento de Kits de chaves, auxilio no controle de vistorias de obra e de unidades remanescentes, envio de documentos para a assinatura dos clientes (Termo de posse das chaves, procurador, entre outros) e organização das chaves para eventos de entrega de chaves.</p>'
    },
    {
      summary:{
        strong: 'Jovem Aprendiz',
        p: 'Even Construtora | Aug 2020 - Nov 2021'
      },
      text: '<p>De agosto de 2020 até novembro de 2021, fui jovem aprendiz trabalhando na construtora Even na área de clientes, erá responsável pela entrega/gestão das chaves dos apartamentos, controle/confecção dos brindes, controle da rota das entregas delivery e também da realização das pesquisas de NPS com os clientes. </p><p>Foi minha primeira experiência no mercado de trabalho, então foi um lugar onde sinto que aprendi o basico de como se portar em trabalho e como contruir para a conclusão das tarefas.</p>'
    }
  ])
}
