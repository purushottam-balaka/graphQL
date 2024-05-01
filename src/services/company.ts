import {AppDataSource} from '../data-source'
import {Company} from '../entity/Company'

const compRepo=AppDataSource.getRepository(Company);

export const addCompany=async(name,address)=>{
    try{
        const company=new Company()
        company.name=name
        company.address=address;
        let user=await compRepo.save(company)
        return true
        
    }catch(error){
        return false

    }
}

export const getComapny=async()=>{
    try{
        const res=await compRepo.find()
        return res
    }catch(error){
        console.log(error)
    }
}

export const getSpecCompany=async(id)=>{
    try{
        const res=await compRepo.findOne({where:{id:id}})
        return res;
    }catch(err){
        return err
    }
}

export const updateCompany=async(id,name,address)=>{
    try{
        const user= await compRepo.findOneBy({id:id})
        user.name=name
        user.address=address
        await compRepo.save(user)
        return true
    }catch(err){
        return false
    }
}
