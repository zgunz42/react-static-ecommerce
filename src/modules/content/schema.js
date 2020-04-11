import { schema, denormalize } from 'normalizr';

const image = new schema.Entity('images');

const category = new schema.Entity('categories');

const facet = new schema.Entity('facets', null, {
  idAttribute: 'name',
  mergeStrategy: (entityA, entityB) => ({
    name: entityA.name,
    values: [...entityA.value, entityB.value]
  })
});

export const product = new schema.Entity('articles', {
  facets: [facet],
  categories: [category],
  images: [image],
});
