import { Queries } from "./query.js"
import executeQuery from './db.js';



export class BusinessService {
    static tableName = "businesses";
    async getBusinessByCategory(params) {
        console.log("businesses service")
        const queries = new Queries();
        const columns = "businesses.idBusiness,businesses.businessName,locations.location ";
        const joinTables = [
            { table: 'categories', condition: `Businesses.category = categories.idCategory` },
            { table: 'locations', condition: `Businesses.location = locations.idLocations` },
        ];
        params["categoryName"]=params["category"];
        delete params["category"];
        params["isActive"] = true;
        const { query, values } = queries.getQuery(BusinessService.tableName, columns, joinTables, params);
        console.log(query)
        const result = await executeQuery(query, values);
        return result;
    }
async 
    async getBusinessById(idParam) {
        //const columns=
        const { query, values } = Queries.getQuery(BusinessService.tableName, columns, idParam);
        const result = await executeQuery(query, values);
        return result;
    }
}