 interface Chauffeurs {
  id_emp       :number,
  id_vehicule  :number,
  salaire      :number,

}

export class Chauffeur implements Chauffeurs{
  id_emp!: number;
  id_vehicule!: number;
  salaire!: number;
}
