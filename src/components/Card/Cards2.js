import {Grid,Typography} from '@material-ui/core';
import styles from './Card.module.css';
const Cards2 = (props) => {
    return(
        <Grid container jusitfy='center'>
          <Grid item  xs={6} md={3} className={styles.card2}>
            
                <Typography variant='subtitle1' component='h3'>
                    Total Covid cases
                </Typography>
                <Typography variant='h6' component='p'>
                    {props.data.local_total_cases}
                </Typography>
            
          </Grid>

          <Grid item  xs={6} md={3} className={styles.card2}>
            
                <Typography variant='subtitle1' component='h3'>
                    Total PCR Tests
                </Typography>
                <Typography variant='h6' component='p'>
                {props.data.total_pcr_testing_count}
                </Typography>
            
          </Grid>
          <Grid item  xs={6} md={3} className={styles.card2}>
            
                <Typography variant='subtitle1' component='h3'>
                    New Covid-19 cases
                </Typography>
                <Typography variant='h6' component='p'>
                    {props.data.local_new_cases}
                </Typography>
            
          </Grid>
          <Grid item  xs={6} md={3} className={styles.card2}>
            
                <Typography variant='subtitle1' component='h3'>
                    New Covid-19 deaths
                </Typography>
                <Typography variant='h6' component='p'>
                    {props.data.local_new_deaths}
                </Typography>
            
          </Grid>
        </Grid>
    )
}

export default Cards2;