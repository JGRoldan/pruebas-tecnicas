import { TODO_FILTERS, FILTERS_BUTTONS } from "../consts.js";
import { type FilterValue } from "../types.js";

interface Props {
  handleFilterChange: (filter: FilterValue) => void;
  filterSelected: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  handleFilterChange,
}) => {
  const handleClick =
    (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      handleFilterChange(filter);
    };

  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, label }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "";

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={handleClick(key as FilterValue)}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
