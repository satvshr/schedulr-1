import React from 'react'
import { Card, Grid, Text, Link } from "@nextui-org/react";

function CustomCard(props) {
    return (
        <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
                <img
                    alt="logo"
                    src={props.src}
                    width="45px"
                    height="45px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                            {props.name}
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>{props.profession}</Text>
                    </Grid>
                </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <Text>
                    {props.review}
                </Text>
            </Card.Body>
        </Card>
    )
}

export default CustomCard