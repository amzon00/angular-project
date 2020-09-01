export class IUser {
  constructor(
    public username: string,
    public password: string | number,
    public rePassword: string | number,
    public country: string
  ) {}
}
