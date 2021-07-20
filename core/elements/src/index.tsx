import {ElementsType} from '@sbf-providers/elements';
import {FlatList} from './FlatList';
import Icon from './Icon';
import Picker from './Picker';
import {
  LayoutItem,
  Grid,
  GridItem,
  SafeAreaLayoutItem,
  SafeAreaGridItem,
  ScrollLayoutItem,
  PositionElement,
} from './Layout';
import Loading from './Loading';
import Touchable from './Touchable';
import Typography from './Typography';
import Rating from './Rating';
import Modal from './Modal';
import Input from './Input';

export default {
  [ElementsType.RATING]: Rating,
  [ElementsType.FLAT_LIST]: FlatList,
  [ElementsType.ICON]: Icon,
  [ElementsType.LAYOUT_ITEM]: LayoutItem,
  [ElementsType.GRID]: Grid,
  [ElementsType.GRID_ITEM]: GridItem,
  [ElementsType.SAFE_AREA_LAYOUT_ITEM]: SafeAreaLayoutItem,
  [ElementsType.SAFE_AREA_GRID_ITEM]: SafeAreaGridItem,
  [ElementsType.SCROLL_LAYOUT_ITEM]: ScrollLayoutItem,
  [ElementsType.LOADING]: Loading,
  [ElementsType.POSITION_ELEMENT]: PositionElement,
  [ElementsType.TOUCHABLE]: Touchable,
  [ElementsType.TYPOGRAPHY]: Typography,
  [ElementsType.PICKER]: Picker,
  [ElementsType.MODAL]: Modal,
  [ElementsType.INPUT]: Input,
};
