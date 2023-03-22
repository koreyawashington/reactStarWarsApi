import React from "react";
import{ Card,Grid } from 'semantic-ui-react';

export default function People({data}){
    return(
        <>
        <h1>Star Wars Characters</h1>
        <Grid columns={3}>
            {data.map((people, i)=>{
                return(
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Description>
                                    <strong>Eye Color</strong>
                                    <p>[{people.eye_color}]</p>
                                    <strong>Birth Year</strong>
                                    <p>[{people.birth_year}]</p>
                                    <strong>Gender</strong>
                                    <p>[{people.gender}]</p>
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