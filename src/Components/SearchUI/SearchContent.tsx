import FilteredCategory from "../FilteredCategory"
import { type SearchProps } from "../../lib/types";

const SearchContent = ({showContent, searchResults, searchTag}: SearchProps) => {
    return (
        <div className={showContent ? "searchbar-content" : "searchbar-content hidden"}>
            <h1 aria-live="polite">
            {" "}
            Found {searchResults.length} results for '{searchTag}'
            </h1>
            <FilteredCategory category={searchResults} />
        </div>
    );
}
 
export default SearchContent;