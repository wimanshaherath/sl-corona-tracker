import styles from './Card.module.css';
import {Card,CardContent,Grid,Typography} from '@material-ui/core';
import cx from 'classnames';
import CountUp from 'react-countup';

const Cards = (props) =>{
    
    return(
        <Grid container justify="center" className={styles.container}>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography varient="h4" component="h1" className={styles.title}>
                        Infected
                    </Typography>
                    <Typography variant="h4" component="h1">
                        <CountUp
                            start={0}
                            end={(props.data.local_active_cases)?props.data.local_active_cases:0}
                            duration={2}
                            separator=","
                        />
                        
                    </Typography>
                    
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography varient="h4" component="h1" className={styles.title}>
                        Recovered
                    </Typography>
                    <Typography variant="h4" component="h1">
                        <CountUp
                            start={0}
                            end={(props.data.local_recovered)?props.data.local_recovered:0}
                            duration={2}
                            separator=","
                        />
                        
                    </Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography varient="h4" component="h1" className={styles.title}>
                        Deaths
                    </Typography>
                    <Typography variant="h4" component="h1">
                        <CountUp
                            start={0}
                            end={(props.data.local_deaths)?props.data.local_deaths:0}
                            duration={2}
                            separator=","
                        />
                        
                    </Typography>
                </CardContent>
            </Grid>
            
        </Grid>
    );
}

export default Cards;