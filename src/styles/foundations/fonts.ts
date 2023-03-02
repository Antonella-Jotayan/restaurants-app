import {COLORS} from './colors';

const FAMILIES = {
  montserratExtraLight: 'Montserrat-ExtraLight',
  montserratRegular: 'Montserrat-Regular',
  montserratSemiBold: 'Montserrat-SemiBold',
  montserratBold: 'Montserrat-Bold',
  montserratExtraBold: 'Montserrat-ExtraBold',
};

const SIZES = {
  sm: 12,
  md: 14,
  lg: 18,
  xl: 22,
};

const FONTS = {
  title: {
    fontFamily: FAMILIES.montserratBold,
    fontSize: SIZES.xl,
    color: COLORS.dark,
  },
  subtitle: {
    fontFamily: FAMILIES.montserratSemiBold,
    fontSize: SIZES.lg,
    color: COLORS.dark,
  },
  body: {
    fontFamily: FAMILIES.montserratRegular,
    fontSize: SIZES.md,
    color: COLORS.dark,
  },
  smallHighlight: {
    fontFamily: FAMILIES.montserratSemiBold,
    fontSize: SIZES.md,
    color: COLORS.dark,
  },
  lightText: {
    fontFamily: FAMILIES.montserratRegular,
    fontSize: SIZES.sm,
    color: COLORS.semiDark,
  },
  link: {
    fontFamily: FAMILIES.montserratSemiBold,
    fontSize: SIZES.md,
    color: COLORS.link,
  },
};

export {FONTS};
