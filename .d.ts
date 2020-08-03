/** Declaration file generated by dts-gen */

export = josh;

declare enum providers {
    /**
     * @todo Implement a mongoDB provider.
     * @summary The mongoDB provider, currently not implemented in versions 0.0.5 and below.
     */
    mongo = "@josh-providers/mongo",
    /**
     * @summary The sqlite provider, currently the only provider.
     */
    sqlite = "@josh-providers/sqlite",
    /**
     * @todo Implement a postgre provider.
     * @summary The mongoDB provider, currently not implemented in versions 0.0.5 and below.
     */
    postgre = "@josh-providers/postgre",
    /**
     * @todo Implement a http provider.
     * @summary The mongoDB provider, currently not implemented in versions 0.0.5 and below.
     */
    http = "@josh-providers/http",
}

declare class josh {
    constructor(...args: any[]);

    dec(...args: any[]): void;

    delete(key: string): void;

    ensure(...args: any[]): void;

    /**
     * 
     * @param key The key to get. Returns undefined if the key does not exist.
     * @see "Enmap Basics" - https://enmap.evie.dev/api#enmap-get-key-path
     * 
     * @example db.defer.then(() => {
     *      db.set("FavouriteFruit", "Apple");
     *      db.get("FavouriteFruit") // Returns "Apple"
     *      db.get("WorstFruit") // Returns undefined because it doesn't exist.
     * })
     */
    get(key: string): any;

    has(key: string): void;

    inc(...args: any[]): void;

    push(...args: any[]): void;

    random(...args: any[]): void;

    randomKey(...args: any[]): void;

    readyCheck(...args: any[]): void;

    remove(key: string): void;

    set(key: string, value: any): void;

    update(...args: any[]): void;

    static providers: {
        mongo: providers.mongo;
        sqlite: providers.sqlite;
        http: providers.http;
        postgre: providers.postgre;
    };
}


