import path from 'path'
import _ from 'lodash'
import {loadContent, injector, modifier} from "./src/modules/content";
import { createSharedData } from 'react-static/node'

// Get started at httsp://react-static.js.org
export default {
  getRoutes: async ({dev}) => {
    const contents = await loadContent('contents', [
      {
        name: 'products',
        mapDataInjector: {
          // id: 'id-injector',
          slug: 'slug-injector',
          priceStr: 'price-injector'
        },
        mapDataModifier: {
          date_created: 'date-modifier',
          date_modified: 'date-modifier',
        },
      },
      {
        name: 'promotions',
        mapDataInjector: {
          // id: 'id-injector',
          slug: 'slug-injector',
        },
        mapDataModifier: {
          date_begin: 'date-modifier',
          date_end: 'date-modifier',
        },
      },
      'settings'
    ], injector, modifier);
    // panggile cuma sekali sebaiknya taruh di get data
    // pada setiap router aja
    const products = _.filter(contents, (content) => content.node === 'products' );
    const productsData = createSharedData(products);
    return [
      {
        path: '/',
        sharedData: {
          products: productsData
        }
      },
      {
        path: '/shop',
        template: 'src/containers/ProductSection',
        children: products.map(product => ({
          path: `/${product.slug}`,
          template: 'src/containers/ProductSingle',
          getData: () => ({product})
        }))
      },
      {
        path: '404',
        template: 'src/containers/NotFound'
      }
    ];
  },
  plugins: [
    [
      'react-static-plugin-source-filesystem',
      {
        location: path.resolve('./src/pages'),
      },
    ],
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap',
    'material-ui'
  ],
}
