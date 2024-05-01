import {gql} from 'postgraphile'

export const company_schema= gql`

type addCompany{
    msg: String
}

extend type Query{
    getAllUsers:[Company],
    getCompanyById(id:Int!):Company

}

type getSpecCompany{
    id:String,
    name:String,
    address:String,
}

extend type Mutation{
    add_user(name:String!, address:String!):addCompany!
    update_company(id:String!,name:String!, address:String!):updateCompany
}

type updateCompany{
    msg:String
}


`
