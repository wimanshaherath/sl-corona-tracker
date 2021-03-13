import {Grid,Typography} from '@material-ui/core';
import styles from './Card.module.css';
const Cards2 = (props) => {
    return(
        <Grid container jusitfy='center' className={styles.container}>
          <Grid item  xs={6} md={3} className={styles.card2}>
            
                <Typography variant='h6' component='h3'>
                    Total Covid cases
                </Typography>
                <Typography variant='h4' component='h4'>
                    {props.data.local_total_cases}
                </Typography>
            
          </Grid>

          <Grid item  xs={6} md={3} className={styles.card2}>
            
                <Typography variant='h6' component='h3'>
                    Total PCR Tests
                </Typography>
                <Typography variant='h4' component='h4'>
                {props.data.total_pcr_testing_count}
                </Typography>
            
          </Grid>
          <Grid item  xs={6} md={3} className={styles.card2}>
            
                <Typography variant='h6' component='h3'>
                    New Covid-19 cases
                </Typography>
                <Typography variant='h4' component='h4'>
                    {props.data.local_new_cases}
                </Typography>
            
          </Grid>
          <Grid item  xs={6} md={3} className={styles.card2}>
            
                <Typography variant='h6' component='h3'>
                    New Covid-19 deaths
                </Typography>
                <Typography variant='h4' component='h4'>
                    {props.data.local_new_deaths}
                </Typography>
            
          </Grid>
          <Grid item xs={12} md={12}>
              <Typography variant="subtitle1" component="p">
                  Last update : {props.data.update_date_time}
              </Typography>
          </Grid>
        </Grid>
    )
}

export default Cards2;