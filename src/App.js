import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Container, Grid,  Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import TableComponent from './components/Table/Table';
import Coverter from "./components/Coverter/Coverter";
const App = () => {
    const currencyOptions = [
        {key: 'af', value: 'af', text: 'Afghanistan'},
        {key: 'ax', value: 'ax', text: 'Aland Islands'},
    ];


    return (
        <SelectComponent>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={9}>
                            <TableComponent />
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Segment>
                                <Coverter
                                    currencyOptions={currencyOptions}
                                />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </SelectComponent>
    );
};
const SelectComponent = styled.div`
  margin-top: 50px;
  .currency-group{
    margin-bottom: 20px;
  }
  .selection{
    margin-left: 10px;
  }
  .image{
    max-width: 15px!important;
  }
  

`;
export default App;
