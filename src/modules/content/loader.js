// import * as schema from './schema';
import _ from 'lodash'
import {getAllNode} from "./node";

function pluginFactory(fns) {
  return (model) => {
    return (key, alias) => {
      const data = _.get(model,  `${key}`);
      return {
        [key]: fns[alias]({parent: model, data})
      }
    }
  }
}

export async function loadContent(root, nodes, injectorFns, modifierFns) {
  // [{name, getNodeData}]
  const parseNodes = nodes.map(node => _.isObject(node) ? node : {name: node});
  const dataFn = await getAllNode(root, parseNodes);
  const injector = pluginFactory(injectorFns);
  const modifier = pluginFactory(modifierFns);

  return Promise
    .all(dataFn.map(fn => fn({modifier, injector})))
    // .then(nodes => denormalize(nodes))
    .catch(console.log)

}
