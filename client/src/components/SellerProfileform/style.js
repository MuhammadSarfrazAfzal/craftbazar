import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    seller:{
        position:'relative',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        top:'40px'
    },
    img:{
        width:'300px',
        height:'400px',
    },
    artistImg:{
        width:'100%',
        height:'100%',
        objectFit:'cover'
    },
    userName:{
        width:'300px',
        height:'400px',
        backgroundColor:'lightgreen',
        textAlign:'center'
    },
    userForm:{
        position:'relative',
        top:'40px'
    },
    userInput:{
        borderColor:'blue',
        width:'90%',
        height:'25px'
    },
    submitBtn:{
        width:'90%',
        height:'25px'
    }
  }));
export default useStyles