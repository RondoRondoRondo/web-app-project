import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '4px',
    },
  },
  paper: {
    padding: '8px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    marginBottom: 10,
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));