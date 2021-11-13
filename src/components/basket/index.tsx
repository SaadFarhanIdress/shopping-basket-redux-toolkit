import React from 'react';
import { Avatar, Button, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import { store, removeItem, removeAll } from '../../store';
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from '../../styles';
import { ProductItem, Props } from '../../types';

const BasketContainer: React.FC<Props> = ({products}) => {

    const classes = useStyles();

    return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Basket
            </Typography>
            <Typography component="p" variant="body1">
                You have {products.filter(product => product.added).length} items in your basket.
            </Typography>
            <List className={classes.cartRoot}>
                {products.filter(product => product.added)
                    .map((product: ProductItem) => (
                        <React.Fragment key={product.id}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Product" src={product.imageUrl} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={product.title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                &pound;{(product.price / 100).toFixed(2)}
                                            </Typography>
                                            {` - ${product.description}`}
                                        </React.Fragment>
                                    }
                                />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => store.dispatch(removeItem({ id: product.id }))}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </React.Fragment>
                    ))}
                <ListItem className={classes.listItem}>
                    <Button onClick={() => store.dispatch(removeAll())}>RESET CART</Button>
                    <Typography variant="subtitle1" className={classes.total}>
                        &pound;
                        {(
                            products.filter(product => product.added)
                                .reduce((acc, current) => (acc += current.price), 0) / 100
                        ).toFixed(2)}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default BasketContainer
