import { useState, FormEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchBarProp } from "./type";

const SearchBar = ({ searchItems }: SearchBarProp) => {
  const [searchKey, setSearchKey] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    searchItems(searchKey);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="search flex-fill d-flex align-items-center"
    >
      <div className="input-group">
        <input
          type="text"
          placeholder="جستجوی فست فود"
          className="form-control rounded-end pe-5 border-success"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <BsSearch className="position-absolute top-50 translate-middle-y text-muted me-3" />
      </div>
    </form>
  );
};

export default SearchBar;
