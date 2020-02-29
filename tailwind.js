module.exports = {
  theme: {
    extend: {},
    colors: {
      green: {
        lighter: '#25ad7c',
        default: '#0C9463',
        darker: '#0c7b4a'
      },
      blue: {
        lighter: '#25ad7c',
        default: '#0c7b4a',
        darker: '#0c7b4a'
      },

      /** Dynamic screen colors */
      primaryDarkblue: {
        lighter: '#34404f',
        default: '#1B2736',
        darker: '#020e1d'
      },
      primaryDarkGrayBlue: {
        lighter: '#3d4956',
        default: '#24303D',
        darker: '#0b170b'
      },
      linkBlue: {
        lighter: '#3570ba',
        default: '#1C57A1',
        darker: '#033e88'
      },
      dashedColor: {
        lighter: '#b1b9c4',
        default: '#98a0ab',
        darker: '#7f8779'
      },
      bgGray: {
        default: '#F0F0F0',
      },
      gray1: {
        default: '#DCDFE6',
      },
      gray2: {
        default: '#E0E0E0',
      },
      gray3: {
        default: '#F5F8FA',
      },
      grayBlue: {
        default: '#F2F5FA',
      },
      darkerGrayBlue: {
        lighter: '#e6e6fa',
        default: '#E6EBF5',
        darker: '#cdd2dc',
      },
      white: '#FFFFFF',
    }
  },
  variants: {
    borderWidth: ['responsive', 'last', 'first', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    margin: ['first']
  },
  plugins: []
};
