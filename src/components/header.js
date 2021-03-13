import {Grid,Typography} from '@material-ui/core';
import styles from './header.module.css'
const Header = () => {
    return(
        <Grid container className={styles.container}>
            <Grid item xs={12} md={12}>
                <Typography variant='h3' component='h3'>
                SL Covid Tracker 
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Header;