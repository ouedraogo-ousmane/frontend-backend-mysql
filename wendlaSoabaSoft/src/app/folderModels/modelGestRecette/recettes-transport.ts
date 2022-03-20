 interface RecettesTransport {
  id_produit          :number,
  id_mission          :number,
  id_client           :number,
  date_recette        :Date,

}
export class RecetteTransport implements RecettesTransport{
  id_produit!: number;
  id_mission!: number;
  id_client!: number;
  date_recette!: Date;
}
