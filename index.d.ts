

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

        export namespace ORM
        {

            export class BaseRepository
            {

            }

        }

    }

    export namespace Http
    {

        export class MakeRequest
        {
            
            /**
             * Defines an Header
             * 
             * @param key Request header key
             * @param value Request header value
             */
            public setHeader(key:string, value:string):MakeRequest;
            
            /**
             * Defines a host
             * 
             * @param host Request host
             */
            public setHost(host:string):MakeRequest;
            
            /**
             * Defines a port
             * 
             * @param port Request port
             */
            public setPort(port:number):MakeRequest;
            
            /**
             * Defines a request timeout 
             * 
             * @param timeout Request timeout
             */
            public setTimeout(timeout:number):MakeRequest;
            
            /**
             * Makes a HTTP GET request
             * @param url Request's url
             * @param params Request's url params
             */
            public get(url:string, params?:any):Promise<Response>;
            
            /**
             * Makes a HTTP POST request
             * 
             * @param url Request's url
             * @param params Request's url params
             * @param body Request's body
             */
            public post(url:string, params?:any, body?:any):Promise<Response>;
            
            /**
             * Makes a HTTP PUT request
             * 
             * @param url Request's url
             * @param params Request's url params
             * @param body Request's body
             */
            public put(url:string, params?:any, body?:any):Promise<Response>;

            /**
             * Makes a HTTP PATCH request
             * 
             * @param url Request's url
             * @param params Request's url params
             * @param body Request's body
             */
            public patch(url:string, params?:any, body?:any):Promise<Response>;
            
            /**
             * Makes a HTTP DELETE request
             * 
             * @param url Request's url
             * @param params Request's url params
             */
            public delete(url:string, params?:any):Promise<Response>;

        }

        export class Request
        {

            /**
             * Request Constructor
             * @param request ExpressJS request object
             */
            constructor(request);
            
            /**
             * Gets an HTTP url param or body attribute by key
             * @param key Param's key
             * @param defaultValue Default value in case key is not found
             */
            public get(key:string, defaultValue?:any):any;
            
            /**
             * Returns HTTP request body
             */
            public getBody():any;
            
            /**
             * Returns HTTP request complete URL
             */
            public getCompleteUrl():string;
            
            /**
             * Returns HTTP request headers
             */
            public getHeaders():any;
            
            /**
             * Returns HTTP request hostname
             */
            public getHostName():string;
            
            /**
             * Returns HTTP request IP Address
             */
            public getIPAddress():string;
            
            /**
             * Returns HTTP request method
             */
            public getMethod():string;
            
            /**
             * Returns HTTP request url params
             */
            public getParams():any;
            
            /**
             * Returns HTTP request port
             */
            public getPort():number;
            
            /**
             * Returns HTTP request protocol
             */
            public getProtocol():string;
    
            /**
             * Returns HTTP request url queries
             */
            public getQueries():any;
            
            /**
             * Returns HTTP request url
             */
            public getUrl():string;

        }

        export class Response
        {
            
            public static HTTP_OK:number;
            public static HTTP_CREATED:number;
            public static HTTP_ACCEPTED:number;
            public static HTTP_BAD_REQUEST:number;
            public static HTTP_UNAUTHORIZED:number;
            public static HTTP_FORBIDDEN:number;
            public static HTTP_NOT_FOUND:number;
            public static HTTP_INTERNAL_SERVER_ERROR:number;

            /**
             * Returns HTTP response headers
             */
            public getHeaders():any;
            
            /**
             * Sets HTTP response headers
             * @param headers Object with headers key value to be set
             */
            public setHeaders(headers:any):Response;

            /**
             * Sets a single header value
             * 
             * @param key Header key
             * @param value Header value
             */
            public setHeader(key:string, value:any):Response;
            
            /**
             * Returns HTTP response headers
             */
            public getStatusCode():number;
            
            /**
             * Sets a HTTP response status code
             * @param statusCode HTTP response status code
             */
            public setStatusCode(statusCode:number):Response;
            
            /**
             * Returns HTTP response content
             */
            public getContent():any|string;
            
            /**
             * Sets a HTTP response content
             * @param content HTTP response content
             */
            public setContent(content:Buffer|string|number|any):Response;

        }

        export namespace Exception
        {

            export abstract class HttpError extends Error
            {

                /**
                 * HttpError Constructor
                 * 
                 * @param message Error's message. Can be string or JSON object
                 */
                public constructor(message:string|any);

                /**
                 * Returns HttpError Code
                 */
                public getCode():number;

            }
            
            export class BadRequestError extends HttpError { }
    
            export class UnauthorizedError extends HttpError { }
    
            export class ForbiddenError extends HttpError { }
    
            export class NotFoundError extends HttpError { }
            
        }

    }

    export namespace MVC
    {

        export abstract class Controller implements IController
        {
            
            abstract routes():IControllerRoute;
    
        }

        export interface IController
        {
            
            /**
             * Holds controllers routes to defined actions
             */
            routes():IControllerRoute;
    
        }
    
        export interface IControllerRoute
        {
            
            /**
             * Defines GET routes and callbacks
             */
            get?:any;
            
            /**
             * Defines POST routes and callbacks
             */
            post?:any;
    
            /**
             * Defines PUT routes and callbacks
             */
            put?:any;
    
            /**
             * Defines DELETE routes and callbacks
             */
            delete?:any;
    
        }

        export interface IMiddleware
        {
    
            do(request?:Http.Request):any;
    
        }

    }

    /**
     * Helper that permits setting and consulting informations.
     * Possible parsing .env file in project root in here.
     */
    export class Config
    {

        /**
         * Get a value from Configuration
         * 
         * @param key Key of value that will be gotten
         * @param defaultValue If key is not found, them returns default value
         */
        public static get(key:string, defaultValue?:any);

        /**
         * Sets a value on Configuration based on key
         * 
         * @param key Key to index configuration
         * @param value Configuration value that will be set
         */
        public static set(key:string, value:any):void;
        
        /**
         * Loads all variables in a .env file on Configuration
         */
        public static loadEnvFile():void;
        
    }

    /**
     * Class responsible for implementing functions that permits manage Cache.
     */
    export class Cache
    {

        /**
         * Gets a cache if it's exists
         * @param fileName 
         */
        public static get(fileName:string, defaultValue?:any):string;

        /**
         * Creates a cache file with defined content
         * 
         * @param fileName File name to be defined
         * @param fileContent File content to be cached
         * @param {Date} expiresAt defines a date when cache should expire. Default is 2 hours
         */
        public static set(fileName:string, fileContent:string, expiresAt?:Date):void;

        /**
         * Verifies if there's a cache file with that name
         * 
         * @param fileName File to be checked
         */
        public static has(fileName:string):boolean;

    }

    /**
     * Represents current application.
     */
    export class App
    {

        /**
         * App Constructor
         * 
         * @param name Application name
         */
        public constructor(name:string);

        /**
         * Registers a microservice that will be used in application
         * 
         * @param {MicroService} microservice MicroService class with routes and callbacks configured
         * @param prefix Prefix of MicroService routes
         */
        public registerMicroService(microservice:MicroService, prefix?:string):void;

        /**
         * Executes App
         * 
         * @param port Defines a port for application run on
         */
        public run(port:number):Server;

    }

    /**
     * Manages each microservice in application and its functionalities
     */
    export class MicroService
    {

        /**
         * MicroService constructor
         * 
         * @param microServiceName Microservice's name
         */
        public constructor(microServiceName:string);

        /**
         * Sets a middleware to the microservice routes
         * 
         * @param {MVC.IMiddleware} middleware Middleware class
         */
        public setMiddleware(middleware:MVC.IMiddleware):void

        /**
         * Defines and run a callback according to called route.
         * 
         * @param method HTTP method to be used
         * @param route Route that when called will execute callback
         * @param callback Callback that will be executed
         */
        public setRoute(method:string, route:string, callback:Function):void;

        /**
         * Register a controller to be used as routes and callbacks (actions) bucket.
         * 
         * @param {MVC.IController} controller Controller with routes and actions that will be loaded
         */
        public registerController(controller:MVC.IController):void

    }

}