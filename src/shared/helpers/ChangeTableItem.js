const ChangeTableItem = ({ item, tableName }) => {
  let values = [];
  let id = '';
  if (tableName === 'table-roles') {
    const { roleId, ...rest } = item;
    values = Object.values(rest);
    id = roleId;
  }

  return {
    values,
    id,
  };
};

export default ChangeTableItem;
