import React, { useState } from 'react';
import {
  Picker as RNPicker,
  PickerProps as PickerRNProps,
} from '@react-native-picker/picker';
import { useElement, ElementsType } from '@sbf-providers/elements';
import { TrackeableHOC } from '../TrackeableHOC';

const RNPickerTestable = TrackeableHOC<
  PickerRNProps & TrackeablePropsInterface
>(RNPicker);

const Picker: React.FC<PickerProps> = ({
  value = '',
  items,
  onValueChange,
  idTrack,
}) => {
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  const [selectedItem, setSelectedItem] = useState(value);
  return (
    <LayoutItem backgroundColor="white" fullWidth shaped bordered>
      <RNPickerTestable
        style={{ height: 50 }}
        itemStyle={{ height: 50 }}
        idTrack={idTrack}
        selectedValue={selectedItem}
        onValueChange={(itemValue: any) => {
          onValueChange(itemValue);
          setSelectedItem(itemValue);
        }}>
        {items.map(a => (
          <RNPicker.Item key={a.value} label={a.label} value={a.value} />
        ))}
      </RNPickerTestable>
    </LayoutItem>
  );
};

export default Picker;
