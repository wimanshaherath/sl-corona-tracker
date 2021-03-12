import React from 'react';
import {Cards,Cards2,Chart} from './components';
import styles from './App.module.css'
import {dataFetch} from './api';


class App extends React.Component{
  state = {
    basicData:{}

  }
  async componentDidMount(){
    const data = await dataFetch();
    this.setState({
      basicData:data
    })
    console.log(this.state.basicData);

// local_total_number_of_individuals_in_hospitals: 609
// update_date_time: "2021-03-12 20:56:25"
    // console.log(local_active_cases);
  }
  render(){
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>SL Covid Tracker</h1>
        <Cards data={this.state.basicData}/>
        <Cards2 data={this.state.basicData}/>
        <Chart />
      </div>
    );
  }
}

export default App;
