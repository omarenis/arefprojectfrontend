import {SecureStorageService} from '../services/secure-storage.service';
import {AbstractRestService} from '../services/genericservice';

/**
 * this is the option of the request, the headers will introduce the security layer of the endpoint and
 * the params wil introduce the params of the data to filter
 */
interface Option {
    headers: object;
    params: object | null | undefined;
}
export class DynamicTableCrud<T> {
    // the data of the table
    data !: T[];
    numberItems !: number;
    protected options !: Option;

    constructor(protected service: AbstractRestService<T>, protected actionUrl: string,
                protected secureStorageService: SecureStorageService) {
    }
    // this function will consume the endpoint to get the specific data
    async getData(params?: object): Promise<void> {
        if (this.options === undefined){
            // get the access token to make the request authorized by backend server
            const access = localStorage.getItem('access');
            if (access !== null){
                this.options = {
                    headers: {Authorization : `Bearer ${this.secureStorageService.getToken(access)}`},
                    params: null
                };
            }
        }
        // this will include all filtering objects and params of the request
        if (params !== null && params !== undefined){
            this.options.params = params;
        }
        // get the data from the endpoint
        this.data = await this.service.list(this.actionUrl, this.options);
        // get the number of the elements in the database
        this.numberItems = this.data.length;
    }

    delete(id: number | undefined, index: number): void {
        if (id !== undefined) {
            this.service.delete(this.actionUrl, id, this.options).then(async () => {
                this.data.splice(index, 1);
                this.numberItems--;
            });
        }
    }
}
