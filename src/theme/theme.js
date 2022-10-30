import { createTheme } from '@mui/material/styles';
//vaghti to muicomponent color midim az colorhaye button nemishe estefade kard,muicoponnent olaviat darad

export const theme = createTheme({
  components: {
    MuiButton:{
      variants:[
        {props:{variant:'mainButton'},
         style:{
          color: '#fff',
          backgroundColor: '#50C2C9',
          borderRadius: '20px',
          textAlign: 'center',
          height: 60,
          width:'100%',
          //'@media only screen and (max-width:600px)':{
          //  color:'#000'
          //},
          '&:hover': {
              backgroundColor: '#50C2C9',
          }


         }
      },        
      {
        props: {variant: 'secondaryButton'},
        style: {

        }
      }

      ]
    },

    MuiCssBaseline: {
      styleOverrides:{
        body: {
        '@media only screen and (max-width:900px)':{
           // color:'#000'
            background: '#EEE'
          },
         // background: '#EEE',
         boxSizing:'border-box',
          '.margin': {
             // margin: 50
          },
          'a': {
             textDecoration:'none'
          },
          '#myId': {

          },
          
      }

      }

    },
  },
  palette:{
    primary:{
      main:'#50C2C9',
      light:'#94F6FC',
      dark:'#138B93'
      
    }
  },
  shadows:{
    0:' 0px 4px 10px rgba(0, 0, 0, 0.25)',
    1:'box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)'

  },
  typography:{
    fontFamily:'Poppins', 
    h1: {
      //header
      fontSize: 18,
      fontWeight: 700,
      lineHeight: '27px',
      color:'rgba(0, 0, 0, 0.85)'
  },
    h2: {
      //header
      fontSize: 15,
      fontWeight: 700,
      lineHeight: '18px',
      color: 'rgba(255, 255, 255, 0.85)'
      },
    h3: {
      //header
      fontSize: 12,
      fontWeight: 700,
      lineHeight: '18px',
      color:'rgba(0, 0, 0, 0.85)'
  },
  subtitle1:{
    //inputText- matn-header items
    fontSize: 13,
    fontWeight: 400,
    lineHeight: '20px',
    color:'rgba(0, 0, 0, 0.79)'
  },
  subtitle2:{
    //subtitle bottom of page - items
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '21px',

  },
  button:{
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '27px',
    color:'#fff',
    textAlign:'center'
  },

    mobi:{
        fontSize:50
    }
  }
  
});
