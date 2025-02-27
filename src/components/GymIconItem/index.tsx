import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { styles } from './styles';

interface GymIconItemProps {
  item: {
    id: number;
    name: string;
    icon: React.FC<SvgProps>;
    selectedIcon: React.FC<SvgProps>;
  };
  selected?: boolean;
}
const GymIconItem = ({item, selected}: GymIconItemProps) => {
  return (
    <TouchableOpacity style={[styles.item, selected && styles.selectedItem]}>
      {selected ? (
        <item.selectedIcon height={60} width={60} />
      ) : (
        <item.icon height={60} width={60} />
      )}
    </TouchableOpacity>
  );
};

export default GymIconItem;
