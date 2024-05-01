import {gql} from 'postgraphile'

export const agent_schema= gql`

extend type Query{
    agent_details:[Agent]
}

extend type Mutation{
    create_new_agent(name:String!,gender:String!,primaryNumber:String!,companyId:String!):createNewAgent
}

type createNewAgent{
    msg:String
}

`