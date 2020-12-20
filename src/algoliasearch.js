import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('YourApplicationID', 'undefined');

const search = instantsearch({
    indexName: 'demo_ecommerce',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: "#searchbox"
    }),

    hits({
        container: "#hits"
    })
]);

search.start();