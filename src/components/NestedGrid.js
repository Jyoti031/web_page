import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridData from './GridData';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
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
}));

export default function NestedGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={358} cellWidth={700} className={classes.gridList} cols={4}>
        {GridData.map((tile) => (
          <Card className={classes.card}>
          <CardActionArea>
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
                  {tile.author}
                </Box>
            </CardContent>
          </CardActionArea>
        </Card>
        ))}
      </GridList>
    </div>
  );
}
