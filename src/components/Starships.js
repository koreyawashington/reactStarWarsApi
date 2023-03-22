import React from "react";
import{ Card,Grid } from 'semantic-ui-react';

export default function Starships({data}){
    return(
        <>
        <h1>Star Wars Starships</h1>
        <Grid columns={3}>
            {data.map((starships, i)=>{
                return(
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{starships.name}</Card.Header>
                                <Card.Description>
                                    <strong>HyperDrive Ratings</strong>
                                    <p>[{starships.hyperdrive_rating}]</p>
                                    <strong>Model</strong>
                                    <p>[{starships.model}]</p>
                                    <strong>Manufacturer</strong>
                                    <p>[{starships.manufacturer}]</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                );
            })}
        </Grid>
        </>
    );
}