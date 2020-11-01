import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridData from './GridData';
import FactoryMenu from './FactoryMenu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginLeft: 268,
    fontSize: 80
  },
  gridList: {
    width: 1100,
    height: 600,
  },
  icon: {
    fontSize: 80
  },
  image: {
    bottom: 100
  },
  card: {
    maxWidth: 214,
  },
  rootpopup: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  popuproot: {
    flexGrow: 1,
  },
  popuppaper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1100,
  },
  popupimage: {
    width: 300,
    height: 200,
  },
  popupimg: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function NestedGrid() {
  const [open, setOpen] = React.useState(false);
  const [title, updateTitle] = React.useState();
  const [desc, updateDesc] = React.useState();
  const [popupImage, setPopupImage] = React.useState();
  const classes = useStyles();
  const handleClickOpen = (e) => {
    updateTitle(e)
    setPopupImage(e.img);
    updateDesc(e.desc);
    updateTitle(e.title);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={358} cellWidth={700} className={classes.gridList} cols={4}>
        {GridData.map((tile) => (
          <Card className={classes.card}>
          <CardActionArea onClick={e => handleClickOpen(tile,10)} value={tile}>
            
            <CardMedia
              component="img"
              height="250"
              image={tile.img}
              
            />
            <CardContent style={{height: '4vw'}}>
                <Box textAlign="left" fontWeight={600} lineHeight={1}>
                   {tile.title}
                </Box>
                <Box textAlign="left" fontWeight="fontWeightLight" lineHeight="2" >
                  {tile.desc}
                </Box>
            </CardContent>
          </CardActionArea>
        </Card>
        ))}
      </GridList>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Material Details
            </DialogTitle>
            <Paper className={classes.popuppaper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.popupimage}>
                    <img className={classes.popupimg} alt="complex" src={popupImage} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {title}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {desc}
                      </Typography>
                      <Box textAlign="left" fontWeight={600} lineHeight={1}>
                        Assign to a factory
                      </Box>
                      <FactoryMenu />
                    </Grid>
                    <Grid item>
                      
                    </Grid>
                  </Grid>
                  <Grid item>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <DialogActions>
              <Button autoFocus variant="outlined" onClick={handleClose} >
                BACK
              </Button>
              <Button variant="contained" disabled>
              NEXT
            </Button>
            </DialogActions>
          </Dialog>
    </div>
  );
}
