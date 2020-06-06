import { Platform } from 'react-native';

const Fonts = {
    regular: 'Quicksand-Medium',
    medium: 'Quicksand-SemiBold',
    bold: 'Quicksand-Bold',
    // Android is sp and iOS is dp for font size
    size: {
        title: Platform.OS === 'ios' ? 20 : 20,
        header: Platform.OS === 'ios' ? 18 : 17,
        text: Platform.OS === 'ios' ? 17 : 15,
        navigationBar: Platform.OS === 'ios' ? 14 : 12,
    }
}
  
export default Fonts;