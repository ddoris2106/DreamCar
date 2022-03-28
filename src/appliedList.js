import react from "react";
import "./style.css"

function AppliedList(props) {
    // state for applied list items
    const {list} = props;
    const {handleAppliedFilters} = props;
    const filters = [];
    
    list.forEach(option => {
        filters.push(<li key={option} onClick={() => { handleAppliedFilters(option) }}>{option}</li>);
    });

    return (
        <div className="filter__appliedListContanier">
            <ul className="filter__appliedList">
                {filters}
            </ul>
        </div>
    )
}

export default AppliedList;