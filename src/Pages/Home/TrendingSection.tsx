import { type CategoryProps } from '../../lib/types';
import { TrendingItem } from '../../Components/Item/TrendingItem';

const TrendingSection = ({category}: CategoryProps) => {
    return (
        <ul>
          {category.map((item, index) => {
            return (
                <TrendingItem item={item} key={index}/>
            );
          })}
        </ul>
    );
}
 
export default TrendingSection;