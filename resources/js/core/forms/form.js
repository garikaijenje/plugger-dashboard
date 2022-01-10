import Errors from "./errors";

class Form {

    constructor(data , storage = {})
    {
        this.storage = storage;
        this.original =  data;
        this.loading = false;
        for ( let  field in data )
        {
            this[field] = data[field];
        }

        this.errors = new Errors();
        this.uploadPercentage =  0;
    }

    fill(field , value)
    {
        this[field] = value;
    }

    store(field , value)
    {
        this.storage[field] = value[field];
    }

    extract(data , exclude  = [])
    {
        for ( let  field in this.original )
        {
            if (exclude.indexOf(field) !== -1 )
            {
                continue;
            }

            let value = data[field];
            if (Array.isArray(value))
            {
                value = value.map((value) => value.id);
            }

            this.fill( field , value);
        }
    }

    data()
    {
        let data = {};
        for ( let  field in this.original ) {
            data[field] = this[field];
        }

        return data;
    }

    reset()
    {
        for ( let  field in this.original )
        {
            this[field] = '';
        }
    }

    submit(url)
    {
        this.loading = true;
        this.errors.clear();
        return new Promise((resolve , reject) => {
            window.axios['post'](`${window.location.origin}${url}` , this.data())
                .then((e) => {
                   this.onSuccess(e);
                   resolve(e);
                }).catch((e) => {
                    this.onFail(e);
                    reject(e);
                }).finally(() => {
                    this.loading = false;
                });
        });

    }


    upload(url)
    {
        this.loading = true;
        this.errors.clear();
        this.uploadPercentage =  0;
        let formData = new FormData();

        for ( let  field in this.original )
        {
            formData.append(field , this[field]);
        }

        return new Promise((resolve , reject) => {
            window.axios['post'](`${window.location.origin}${url}` , formData , {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },

                onUploadProgress : function(progressEvent){
                    this.uploadPercentage = parseInt(Math.round( ( progressEvent.loaded / progressEvent.total ) * 100));
                }.bind(this)

            }).then((e) => {
                this.uploadPercentage =  0;
                this.loading = false;
                this.onSuccess(e);
                resolve(e);
            }).catch((e) => {
                this.uploadPercentage =  0;
                this.loading = false;
                this.onFail(e);
                reject(e);
            });

        });
    }


    onSuccess(e)
    {
        // // Trigger the sweet alert for all forms if they have a message
        // if (e.data.message)
        // {
        //     window.alerts.success(e);
        // }
    }

    onFail(e) {
        this.errors.record(e.response.data.errors);
    }
}

export default Form;
