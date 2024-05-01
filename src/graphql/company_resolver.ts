import {addCompany,getComapny,getSpecCompany, updateCompany} from '../services/company'

export const companyResolver= {
Query:  {
    getAllUsers: async()=>{
        let data= await getComapny();
        return data
    },
    getCompanyById:async(_,{id})=>{
        let user=await getSpecCompany(id);
        return user
    },
    
},
Mutation: {
    add_company:async(_,{name,address})=>{
        const data=await addCompany(name,address)
        if (data) return {msg:'New company created successfully'}
        else return {msg:'New company creation failed'}
        
    },

    update_company:async(_,{id,name,address})=>{
        const data = await updateCompany(id,name,address)
        if (data==true) return {msg:'Company updated successfully'}
        else return {msg: 'Update failed'}
    }, 

    },
}
