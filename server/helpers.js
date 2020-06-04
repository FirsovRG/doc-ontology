module.exports.uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const parseTree = (item) => {
  if (item.type === "directory") {
    return {
      uuid: this.uuidv4(),
      name: item.name,
      type: item.type,
      children: item.children.map((child) => parseTree(child)),
    };
  }

  return {
    uuid: this.uuidv4(),
    name: item.name,
    type: item.type,
    path: item.path,
  };
};

const flat = (tree) => {
  return tree
    .map((item) => {
      if (item.type === "directory") {
        return flat(item.children);
      }

      return item;
    })
    .reduce((acc, val) => (val.length ? [...acc, ...val] : [...acc, val]), []);
};

const findDocInTree = (tree, uuid) => {
  const flatTree = flat(tree);

  return flatTree.find((item) => item.uuid === uuid);
};

module.exports.parseTree = parseTree;
module.exports.flat = flat;
module.exports.findDocInTree = findDocInTree;
