import './search-box.styles.css';

const SearchBox = (props) => {
        return (
        <input
          className={props.className}
          type='search'
          placeholder={props.placeholderText}
          onChange={props.onChangeHandler}
        />
        )
}

export default SearchBox;