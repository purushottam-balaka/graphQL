import { makeExtendSchemaPlugin } from "graphile-utils"

import { company_schema}  from "../graphql/company_schema"
import {companyResolver} from "../graphql/company_resolver"
export const companyPlugin=makeExtendSchemaPlugin((build):any=>{
    return {
        typeDefs: company_schema,
        resolvers:companyResolver,
    }
})