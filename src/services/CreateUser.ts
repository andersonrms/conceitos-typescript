interface TechObject{
    title: string,
    experience: number
}

interface createUserData{
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>
    //se o array for apenas de um tipo unico usamos o seguinte formato => 
    //techs: string[] / techs: number[]
}

export default function createUser({ name, email, password }: createUserData){
    const user = {
        name,
        email,
        password
    }

    return user;
}