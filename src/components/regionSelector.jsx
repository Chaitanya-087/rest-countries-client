import React from "react";
import Select from "react-select";

const RegionSelector = ({setRegion}) => {
  const options = [
    {value: "", label: "All"},
    {value: "asia", label: "Asia"},
    {value: "africa", label: "Africa"},
    {value: "america", label: "America"},
    {value: "europe", label: "Europe"},
    {value: "oceania", label: "Oceania"},
  ];

  return (
    <Select
      options={options}
      placeholder='Filter by Region'
      onChange={(e) => setRegion(e.value)}
      styles={{
        container: (baseStyles) => ({
          ...baseStyles,
          minWidth: "200px",
          boxShadow: "hsla(0, 0%, 0%, 0.2) 0px 2px 4px 0px",
          borderRadius: "4px",
        }),
        control: (baseStyles) => ({
          ...baseStyles,
          background: "hsl(var(--clr-element))",
          border: "none",
          padding: "0.25rem 0.5rem",
        }),

        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: "hsl(var(--clr-text),0.7)",
          fontWeight: 600,
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          fontSize: "14px",
          color: "hsl(var(--clr-text),0.7)",
          fontWeight: 600,
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          background: "hsl(var(--clr-element))",
        }),

        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused ? "blueviolet" : "null",
          color: state.isFocused ? "white" : "hsl(var(--clr-text),0.7)",
          fontWeight: 600,
          fontSize: "14px",
        }),
      }}
    />
  );
};

export default RegionSelector;
