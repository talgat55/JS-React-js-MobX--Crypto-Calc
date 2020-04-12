import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Container, Grid, Input, Segment, Select, Table, Label} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
    const currencyOptions = [
        {key: 'af', value: 'af', text: 'Afghanistan'},
        {key: 'ax', value: 'ax', text: 'Aland Islands'},
    ];

    const [data, setData] = useState([]);
    useEffect(()=>{
        axios
            .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then( ({data}) =>{
                const json = data.Data.map(item =>{
                    const obj = {
                        name: item.CoinInfo.Name,
                        fullName: item.CoinInfo.FullName,
                        imageUrl: `https://www.cryptocompare.com/${item.CoinInfo.ImageUrl}`,
                        price:  item.RAW.USD.PRICE.toFixed(2),
                        volume24Hour: parseInt(item.RAW.USD.VOLUME24HOUR ),
                    };
                    return obj;
                });
                setData(json);
            })
    },[]);
    return (
        <SelectComponent>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={9}>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Full Name</Table.HeaderCell>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Price</Table.HeaderCell>
                                        <Table.HeaderCell>24 hours</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {
                                        data.map(item =>(
                                            <Table.Row>
                                                <Table.Cell>{item.name} <img className="image" src={item.imageUrl}  alt="Icon" /></Table.Cell>
                                                <Table.Cell>{item.fullName}</Table.Cell>
                                                <Table.Cell>${item.price}</Table.Cell>
                                                <Table.Cell>${item.volume24Hour}</Table.Cell>
                                            </Table.Row>
                                            ))
                                    }
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Segment>
                                <div className="currency-group">
                                    <Input placeholder='Валюта'/>
                                    <Select placeholder='Валюта' options={currencyOptions}/>
                                </div>
                                <div className="currency-group">
                                    <Input placeholder='Валюта'/>
                                    <Select placeholder='Валюта' options={currencyOptions}/>
                                </div>
                                <div className="result">
                                    100 p
                                </div>
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
