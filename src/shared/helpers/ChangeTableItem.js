import moment from 'moment';

const ChangeTableItem = ({ item, tableName }) => {
  let values = [];
  let id = '';
  let showAction = true;

  const filterType = (val) => {
    if (typeof val === 'boolean') return val ? 'SI' : 'NO';
    else return val;
  };

  if (tableName === 'table-roles') {
    const { roleId, ...rest } = item;

    if (rest.isSystem) showAction = false;
    if (rest.creationDate)
      rest.creationDate = moment(rest.creationDate).format('DD/MM/YYYY');
    values = Object.values(rest).map(filterType);
    id = roleId;
  }

  if (tableName === 'table-users') {
    const { userId, avatar, ...rest } = item;
    if (rest.creationDate)
      rest.creationDate = moment(rest.creationDate).format('DD/MM/YYYY');
    if (rest.lastLogin)
      rest.lastLogin = moment(rest.lastLogin).format('DD/MM/YYYY');

    values = Object.values(rest).map(filterType);
    id = userId;
  }
  if (tableName === 'sub-table-roles') {
    const { userId, ...rest } = item;
    const { userName, firstName, lastName } = rest;

    const newItem = {
      userName,
      firstName,
      lastName,
    };
    if (rest.creationDate)
      newItem.creationDate = moment(rest.creationDate).format('DD/MM/YYYY');
    values = Object.values(newItem);
    id = userId;
  }

  return {
    values,
    id,
    showAction,
  };
};

export default ChangeTableItem;
