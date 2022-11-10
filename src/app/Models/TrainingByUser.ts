import { ITraining } from "./Treinamento";

export interface ITraningByUser extends ITraining{
    userId:number;
    // trainings:ITraining[]
}