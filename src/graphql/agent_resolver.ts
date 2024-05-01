import { Query } from 'pg'
import {getAgentDetails,createNewAgent} from '../services/agent'

export const agent_resolver={
    Query:{
        agent_details:async()=>{
            const data= await getAgentDetails()
            return data
        },
    },
    Mutation:{
        create_new_agent:async(_,{name,gender,primaryNumber,companyId})=>{
            const data=await createNewAgent(name,gender,primaryNumber,companyId)
            return data
        },
    }
}