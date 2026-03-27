const lists = {};

module.exports = {
  // Command to view items in a list
  list: (args) => {
    const listName = args[0];
    if (lists[listName]) {
      return `Items in ${listName}: ${lists[listName].join(', ')}`;
    } else {
      return `List ${listName} does not exist.`;
    }
  },

  // Command to add items to a list
  add: (args) => {
    const [itemName, listName] = args;
    if (!lists[listName]) {
      lists[listName] = [];
    }
    lists[listName].push(itemName);
    return `${itemName} added to ${listName}.`;
  },

  // Command to remove items from a list
  remove: (args) => {
    const [itemName, listName] = args;
    if (lists[listName]) {
      lists[listName] = lists[listName].filter(item => item !== itemName);
      return `${itemName} removed from ${listName}.`;
    } else {
      return `List ${listName} does not exist.`;
    }
  },

  // Command to create a new list
  newList: (args) => {
    const listName = args[0];
    if (lists[listName]) {
      return `List ${listName} already exists.`;
    }
    lists[listName] = [];
    return `List ${listName} created.`;
  },

  // Command to work with specific named lists
  useList: (args) => {
    const listName = args[0];
    if (lists[listName]) {
      return `Working with list: ${listName}`;
    } else {
      return `List ${listName} does not exist.`;
    }
  }
};