// Filters or pipes
import Vue from "vue";

Vue.filter('string_limit', function (value , limit = 20   , preceding = '...' ) {

    if (value)
    {
        return value.length > limit ? value.substr( 0 ,  limit ) + preceding : value;
    }


    return value;

});

Vue.filter('model', function (value , limit = 20   , preceding = '...' ) {

    if (value)
    {
        return value.replace(/App\\/, '');
    }

    return value;

});
