import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  Welcomescreen:{
    position:'relative',
    top:'130px',
  },
  heading:{
    display:'flex',
    justifyContent:'center',
  },
  content:{
    display:'flex',justifyContent:'center',alignItems:'center'
  },
  para:{
    textAlign:'center',
    width:'300px',
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