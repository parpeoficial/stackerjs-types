

export namespace StackerJS
{

    export namespace DB
    {

        export interface Query
        {

            collection:string;

            attributes?:any;

            criteria?:any;

        }

        export interface QueryResponse
        { 

            lastInsertedId:number;

            affectedRows:number;

            changedRows:number;

        }

        export interface Adapter
        {

            create(Query):Promise<boolean>;

            insert(Query):Promise<QueryResponse>;

            update(Query):Promise<QueryResponse>;

            findOne(Query):Promise<any>;

            findAll(Query):Promise<Array<any>>;

            delete(Query):Promise<QueryResponse>;

            drop(Query):Promise<QueryResponse>;

        }

    }

}