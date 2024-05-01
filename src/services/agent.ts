import { Agent } from '../entity/Agent'
import {Company} from '../entity/Company'
import {AppDataSource} from '../data-source'

const agentRepo=AppDataSource.getRepository(Agent)
const compRepo=AppDataSource.getRepository(Company);

export const getAgentDetails = async()=>{
    try{
        let res=await agentRepo.find()
        return res;
    }catch(err){
    return(err)
    }
}

export const createNewAgent= async(name,gender,primaryNumber,companyId)=>{
    try{
        const user=await compRepo.findOneBy({id:companyId})
        if(user){
            const agent=new Agent()
            agent.name=name
            agent.gender=gender
            agent.primaryNumber=primaryNumber
            await agentRepo.save(agent)
            return {msg:"Agent saved successfully"}

        }
        else{
            return {msg:"Company id is not found "}
        }
    }catch(err){
        return err
    }
}