import React from "react";
import{ Card,Grid } from 'semantic-ui-react';

export default function Species({data}){
    return(
        <>
        <h1>Star Wars Species</h1>
        <Grid columns={3}>
            {data.map((species, i)=>{
                return(
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{species.name}</Card.Header>
                                <Card.Description>
                                    <strong>Language</strong>
                                    <p>[{species.language}]</p>
                                    <strong>Classification</strong>
                                    <p>[{species.classification}]</p>
                                    <strong>Average Lifespan</strong>
                                    <p>[{species.average_lifespan}]</p>
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