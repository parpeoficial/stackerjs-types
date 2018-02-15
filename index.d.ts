

export namespace StackerJS
{

    export namespace DB
    {

        export namespace Adapter
        {

            export function create(query:Query):Promise<boolean>;

            export function insert(query:Query):Promise<QueryResponse>;

            export function update(query:Query):Promise<QueryResponse>;

            export function findOne(query:Query):Promise<any>;

            export function findAll(query:Query):Promise<Array<any>>;

            export function remove(query:Query):Promise<QueryResponse>;

            export function drop(query:Query):Promise<QueryResponse>;

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

        }

    }

}