 interface Exercice {
  id_exercice          :number,
  id_emp               :number,
  date_debut           :Date,
  date_fin             :Date,
  etat                 :boolean

}

export class Exercices implements Exercice{
  id_exercice!: number;
  id_emp!: number;
  date_debut!: Date;
  date_fin!: Date;
  etat!: boolean;

}
