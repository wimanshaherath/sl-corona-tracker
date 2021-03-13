import {Grid,Typography} from '@material-ui/core';
import styles from './footer.module.css'
const Footer = () => {
    return(
        <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.item}>
                <Typography variant='h5' component='h5'>
                    STAY SAFE | Powered by Health Promotion Bureau 
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer;