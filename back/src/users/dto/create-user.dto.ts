export class CreateUserDto {
    name: string;
    lastName: string;
    email: string;
    password: string;
    city: string;
    coder:boolean;
    photo: string;
    stack: { Html?: boolean, Css?: boolean, JavaScript?: boolean, React?: boolean, Nest?: boolean, MySQL: boolean, Mongodb: boolean };
}
