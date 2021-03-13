import React from 'react';
import {Cards,Cards2,Chart,Footer,Header} from './components';
import styles from './App.module.css'
import {dataFetch,dailyDataFetch} from './api';
import {Grid} from '@material-ui/core';

class App extends React.Component{
  state = {
    basicData:{},
    dailyData:{}
  }
  async componentDidMount(){
    const data = await dataFetch();
    const dailyFetchData = await dailyDataFetch();

    this.setState({
      basicData:data,
      dailyData:dailyFetchData
    })
    console.log(this.state.basicData);

// local_total_number_of_individuals_in_hospitals: 609
// update_date_time: "2021-03-12 20:56:25"
    // console.log(local_active_cases);
  }
  render(){
    return (
      // <div className={styles.container}>
      //   {/* <div className={styles.header}><h1 className={styles.title}>SL Covid Tracker</h1></div> */}
      //   <Header />
      //   <div className={styles.content}>
      //     <Cards data={this.state.basicData}/>
      //     <Cards2 data={this.state.basicData}/>
      //   </div>
      //   <Footer/>
      // </div>
      <Grid container justify="center" className={styles.main}>
        <Grid item xs={12} md={12} className={styles.item}>
          <Header/>
        </Grid>
        <Grid item xs={12} md={12} className={styles.item}>
          <Cards data={this.state.basicData}/>
          <Cards2 data={this.state.basicData}/>
        </Grid>
        <Grid item xs={12} md={12} className={styles.item}>
          <Footer/>
        </Grid>
      </Grid>
    );
  }
}

export default App;
