 interface Manager {
  id_emp               :number,
  email                :string,
  password             :string
}

export class Managers implements Manager{
  password!: string;
  id_emp!: number;
  email!: string;

}
