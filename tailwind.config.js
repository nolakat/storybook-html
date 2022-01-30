module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontSize: {
      'xs': '.625rem', //10px
      'sm': '.75rem', // 12ox
      'tiny': '.875rem', // 14px
       'base': '1rem', //16px
       'lg': '1.125rem', //18px
       'xl': '1.25rem', //20px
       '1xl': '1.5rem', //24px
       '2xl': '1.625rem', //26px
      '3xl': '1.875rem', //30px
      '4xl': '2.25rem', //36px
       '5xl': '3rem',  //48px
       '6xl': '3.75rem', //60px
      '7xl': '4.5rem', //72px
      '8xl': '5.625rem' //90px
    },
    borderRadius: {
      'sm': '3.188rem', //51px
      'md': '4.688rem' //75px
    },
    extend:{
      spacing: {
        '7.5': '1.875rem', //30px
        '21.75': '5.438rem' //87px
      }
    }
  }
}
