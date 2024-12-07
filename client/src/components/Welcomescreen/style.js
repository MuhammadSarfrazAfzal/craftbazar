import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  welcomescreen:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  heading:{
    display:'flex',
    justifyContent:'center',
    color:'white'
  },
  content:{
    display:'flex',justifyContent:'center',alignItems:'center'
  },
  para:{
    textAlign:'center',
    width:'300px',
    color:'white'
  },
  container:{
    display:'flex',alignItems:'center',justifyContent:'center'
    
  },
  card:{
    width:'250px',
    hight:'200px',
    margin:'10px'
  },
  
  }));
export default useStyles