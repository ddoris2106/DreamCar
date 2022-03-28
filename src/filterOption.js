import "./style.css";

function FilterOption(props) {
    
    const {options} = props;
    const {handleAppliedFilters} = props;
    const {monetary} = props;
    const {categoryName} = props;
    const list = [];

    console.log(options);

    options.forEach(option => {
        list.push(<li key={option} onClick={() => { handleAppliedFilters(option) }}>{monetary ? "$" + option : option}</li>);
    });

    return(
        <ul key={categoryName + " list"} className="filter__filterCategoryOptions">
            {list}
        </ul>
    );
}

export default FilterOption;