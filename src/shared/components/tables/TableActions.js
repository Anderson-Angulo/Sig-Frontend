const TableActions = ({ closeActions, setSelectedOption, actions }) => {
  return (
    <div className="table-item-actions-selected absolute w-full z-50 shadow-md rounded-md">
      <i
        className="pi pi-times absolute cursor-pointer rounded-full flex items-center"
        onClick={closeActions}
      ></i>
      <div className="item-selected-actions flex flex-col items-baseline">
        {actions.map((action, i) => (
          <button key={i} onClick={() => setSelectedOption(action.name)}>
            {action.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableActions;
