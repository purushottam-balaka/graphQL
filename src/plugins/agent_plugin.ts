import { makeExtendSchemaPlugin } from "graphile-utils"

import { agent_schema} from '../graphql/agent_schema'
import {agent_resolver} from '../graphql/agent_resolver'
export const agentPlugin=makeExtendSchemaPlugin((build):any=>{
    return {
        typeDefs: agent_schema,
        resolvers:agent_resolver,
    }
})