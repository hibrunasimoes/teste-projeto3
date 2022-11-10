import { ITraningByUser } from '../Models/TrainingByUser';

export const TRAININGBYUSER_MOCK: ITraningByUser[] = [
  {
    userId: 2,
    id: 2,
    url: 'https://setcesp.org.br/wp-content/uploads/2019/08/treinamento.jpg',
    title: 'Ingles Basico',
    description:
        'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Inlges o basico.',
    teacher: 'Rodrigo Rosa',
    duration: 70,
    status: 'andamento',
    category: 'idioma'
  },
  {
    userId: 3,
    id: 3,
    url: 'https://certificadocursosonline.com/wp-content/uploads/2019/10/entrepreneur-1340649_640.jpg',
    title: 'Planos de Negocios',
    description:
      'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
    teacher: 'Ana Petra',
    duration: 80,
    status: 'finalizado',
    category: 'financas',
  },
  {
    userId:5,
    id: 5,
    url: 'https://certificadocursosonline.com/wp-content/uploads/2018/09/coins-1015125_640.jpg',
    title: 'controler Financeiro',
    description:
      'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
    teacher: 'Ana Petra',
    duration: 80,
    status: 'disponivel',
    category: 'financas',
  },
]


