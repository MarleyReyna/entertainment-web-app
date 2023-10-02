import { type CategoryProps } from "../lib/types";
import { Item } from "./Item/Item";

const FilteredCategory = ({ category }: CategoryProps) => {
    return (
        <ul>
          {category.map((item, index) => {
            return (
                <Item item={item} key={index}/>
            );
          })}
        </ul>
    );
}
 
export default FilteredCategory;