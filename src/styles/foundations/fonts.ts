const FAMILIES = {
  montserratExtraLight: 'Montserrat-ExtraLight',
  montserratRegular: 'Montserrat-Regular',
  montserratSemiBold: 'Montserrat-SemiBold',
  montserratBold: 'Montserrat-Bold',
  montserratExtraBold: 'Montserrat-ExtraBold',
};

const FONTS = {
  title: {fontFamily: FAMILIES.montserratBold, fontSize: 20, color: '#000'},
  subtitle: {
    fontFamily: FAMILIES.montserratSemiBold,
    fontSize: 16,
    color: '#000',
  },
  body: {fontFamily: FAMILIES.montserratRegular, fontSize: 13, color: '#000'},
  smallHighlight: {
    fontFamily: FAMILIES.montserratSemiBold,
    fontSize: 14,
    color: '#000',
  },
  lightText: {
    fontFamily: FAMILIES.montserratRegular,
    fontSize: 12,
    color: 'gray',
  },
};

export {FONTS};
