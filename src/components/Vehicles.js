import React from "react";
import{ Card,Grid } from 'semantic-ui-react';

export default function Vehicles({data}){
    return(
        <>
        <h1>Star Wars Vehicles</h1>
        <Grid columns={3}>
            {data.map((vehicles, i)=>{
                return(
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{vehicles.name}</Card.Header>
                                <Card.Description>
                                    <strong>Cost in Credits</strong>
                                    <p>[{vehicles.cost_in_credits}]</p>
                                    <strong>Model</strong>
                                    <p>[{vehicles.model}]</p>
                                    <strong>Manufacturer</strong>
                                    <p>[{vehicles.manufacturer}]</p>
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