import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";

const DropdownSimple = ({ label, options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  // Reference to the dropdown element to detect outside clicks
  const dropdownRef = useRef(null);

  // Close the dropdown if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value, label) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    setSearchTerm(label);
    setIsOpen(false);

    // Trigger the onChange callback with the selected value
    if (onChange) {
      onChange(value);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search term changes (for filtering)
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="form-group">
      {label && <label className="label label-left">{label}</label>}
      <div
        className="input-group"
        style={{ position: "relative" }}
        ref={dropdownRef}
      >
        <div className={`dropdown-simple ${isOpen ? "active" : ""}`}>
          <div
            className="dropdown-simple-head"
            style={{ position: "relative" }}
          >
            <input
              type="text"
              className="input-dropdown-simple"
              placeholder={placeholder}
              value={isOpen ? searchTerm : selectedLabel} // Use searchTerm when dropdown is open, else show selectedLabel
              onChange={(e) => handleChange(e)}
              onFocus={() => setIsOpen(true)} // When focus is on the input field, open the dropdown
              style={{ paddingRight: "30px" }}
            />
            <FaChevronDown
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />{" "}
            {/* Arrow icon */}
          </div>
          {isOpen && (
            <div className="dropdown-simple-list">
              <ul>
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option) => (
                    <li
                      key={option.value}
                      className="dropdown-simple-item"
                      onClick={() => handleSelect(option.value, option.label)}
                    >
                      {option.label}
                    </li>
                  ))
                ) : (
                  <li className="dropdown-simple-item disabled">
                    No options found
                  </li>
                )}
              </ul>
            </div>
          )}
          <input type="hidden" value={selectedValue} />
        </div>
      </div>
    </div>
  );
};

DropdownSimple.propTypes = {
  label: PropTypes.string, // Label text
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired, // The value of the option
      label: PropTypes.string.isRequired, // The display label of the option
    })
  ).isRequired, // Array of options
  placeholder: PropTypes.string, // Placeholder text
  onChange: PropTypes.func, // Callback function to handle the selected value
};

DropdownSimple.defaultProps = {
  label: "",
  placeholder: "Select...",
  onChange: () => {}, // Default empty function if onChange is not provided
};

export default DropdownSimple;
