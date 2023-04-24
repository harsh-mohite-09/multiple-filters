import React from "react";
import { useAppContext } from "../context/AppContextProvider";

const Filters = () => {
  const { appliedFilters, setAppliedFilters } = useAppContext();
  const checkBoxfilters = [
    { title: "Veg", name: "is_vegetarian", id: "veg" },
    { title: "Spicy", name: "is_spicy", id: "spicy" }
  ];
  const radioFilters = [
    { title: "Sort (price) Low to High", name: "sort", id: "lth" },
    { title: "Sort (price) High to Low", name: "sort", id: "htl" }
  ];

  const changeHandler = (e) => {
    setAppliedFilters({
      ...appliedFilters,
      search: e.target.value
    });
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setAppliedFilters({
        ...appliedFilters,
        checkbox: [...appliedFilters.checkbox, e.target.name]
      });
    } else {
      setAppliedFilters({
        ...appliedFilters,
        checkbox: appliedFilters.checkbox.filter(
          (item) => item !== e.target.name
        )
      });
    }
  };

  const handleSort = (e) => {
    setAppliedFilters({
      ...appliedFilters,
      radio: e.target.id
    });
  };

  return (
    <>
      <h3>Filters: </h3>
      <div>
        <input
          type="text"
          placeholder="Search food here"
          value={appliedFilters.search}
          onChange={changeHandler}
        />

        {checkBoxfilters.map(({ title, name, id }) => {
          return (
            <React.Fragment key={id}>
              <input
                type="checkbox"
                name={name}
                id={id}
                checked={appliedFilters.checkbox.includes(name)}
                onChange={handleCheck}
              />
              <label htmlFor={id}>{title}</label>
            </React.Fragment>
          );
        })}

        {radioFilters.map(({ title, name, id }) => {
          return (
            <React.Fragment key={id}>
              <input
                type="radio"
                name={name}
                id={id}
                onChange={handleSort}
                checked={appliedFilters.radio === id}
              />
              <label htmlFor={id}>{title}</label>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Filters;
