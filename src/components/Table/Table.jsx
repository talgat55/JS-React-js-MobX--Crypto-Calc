import React from 'react';
import {Table }   from 'semantic-ui-react';


export default ({data}) => (
    <>
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
    </>
)