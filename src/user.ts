export class User {
  constructor(
    public username: string,
    public password: string | number,
    public rePassword: string | number,
    public country: string
  ) {}
}
