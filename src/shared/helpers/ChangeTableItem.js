import moment from 'moment';

const ChangeTableItem = ({ item, tableName }) => {
  let values = [];
  let id = '';

  const filterType = (val) => {
    if (typeof val === 'boolean') return val ? 'SI' : 'NO';
    else return val;
  };
  if (tableName === 'table-roles') {
    const { roleId, ...rest } = item;

    if (rest.creationDate)
      rest.creationDate = moment(rest.creationDate).format(
        'DD/MM/YYYY hh:mm:ss'
      );

    values = Object.values(rest).map(filterType);
    id = roleId;
  }

  return {
    values,
    id,
  };
};

export default ChangeTableItem;
