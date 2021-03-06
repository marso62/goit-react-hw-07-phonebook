import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styles from "./ContactFilter.module.css";
import { filterSelector } from "../../redux/selectors/index";

const ContactsFilter = ({ onHandleChangeFilter }) => {
  const filter = useSelector((state) => filterSelector(state));

  return (
    <div className={styles.Container}>
      <label htmlFor="filter" className={styles.Label}>
        Find contacts by name
        <input
          className={styles.PhonebookForm__filter}
          type="text"
          name="filter"
          value={filter}
          onChange={onHandleChangeFilter}
        />
      </label>
    </div>
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string,
  onHandleChangeFilter: PropTypes.func.isRequired,
};

export default ContactsFilter;
