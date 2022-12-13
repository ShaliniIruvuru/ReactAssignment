import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';



function ChildCard({ item, updateBook }: any) {
    return (
        <div>
            <CardMedia
                component="img"
                height="250"                
                image={item.img}
            />
            <div style={{ textAlign: 'left' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" id="txtcolor" >
                        {item.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {item.author}
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <IconButton disabled color="primary" aria-label="add an alarm">
                            <AlarmIcon />&nbsp;
                            <Typography color="text.secondary">
                                {item.readTime } </Typography>
                        </IconButton>
                      {item.readersCount &&
                        <IconButton data-testid='readers-count' disabled color="primary" aria-label="add an alarm">
                            <PermIdentityIcon />&nbsp;
                            <Typography color="text.secondary">
                                {item.readersCount } 
                                </Typography>
                        </IconButton>
                    }

                    </div>
                </CardContent>
            </div>
            <CardActionArea >
                <div data-testid='card-button' style={{ textAlign: 'center', paddingBottom: 10, paddingTop: 10 }}
                    onClick={() => updateBook({ id: item.id, isFinished: !item.isFinished })}  >
                    <Typography gutterBottom variant="button" id="txtcolor" >
                        {item.isFinished ? 'Finished' : 'Read Again'}

                    </Typography>
                </div>


            </CardActionArea>

            <div style={{
                height: 20,
                backgroundColor: 'lightseenblue',// bottom Border color
                opacity: 0.6,
                width: '100%',

            }}>
                <div style={{
                    width: '30%',
                    backgroundColor: '#9d9d9d33',

                    height: '100%',
                }}></div>
            </div>


        </div>
    );
}
export default ChildCard;