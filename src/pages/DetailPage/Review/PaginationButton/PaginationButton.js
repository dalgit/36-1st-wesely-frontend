import './PaginationButton.scss';

function PaginationButton({ id, offset, changeOffset }) {
  return (
    <button
      className="reviewPaginationButton"
      id={id}
      onClick={({ target }) => changeOffset(target.id - 1)}
      disabled={id - 1 === offset / 7 ? true : false}
    >
      {id}
    </button>
  );
}

export default PaginationButton;
