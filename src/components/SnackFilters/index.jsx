import React from 'react';

const SnackFilters = ({healthyOnly, vegetarianOnly, textFilter, setHealthyOnly, setVegetarianOnly, setTextFilter}) => {

    function setHealthy () {
        setHealthyOnly(!healthyOnly)
    }

    function setVegetarian () {
        setVegetarianOnly(!vegetarianOnly)
    }

    function updateTextFilter (e) {
        setTextFilter(e.target.value);
    }

    return <div className="snack-filters">
        <label>Healthy:<input type="checkbox"
        checked={healthyOnly}
        onChange={setHealthy}></input></label>
        <label>Vegetarian:<input type="checkbox"
        checked={vegetarianOnly}
        onChange={setVegetarian}></input></label>
        <label>Search:<input type="text" value={textFilter} onChange={updateTextFilter} /></label>
    </div>
};

export default SnackFilters;
